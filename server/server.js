const express = require('express'); //HTTP anfrage und antowrten zu verarbeiten
const cors = require('cors'); // von unbefugtem zugriff zu schützen
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Authentifisierung und authorisierung
const app = express();
const port = 8080;

app.use(express.json());
app.use(cors({
  origin: '*',
  allowedHeaders: ['*'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'toor',
  database: 'oekohelden',
  port: '3307',
});

connection.connect((err) => {
  if (err) {
    console.error('Fehler bei der Verbindung zur Datenbank:', err);
    return;
  }
  console.log('Mit der MySQL-Datenbank verbunden.');
});

const JWT_SECRET = 'oekohelden';

//----------------------------------------------- MIDDLEWARE

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Kein Token bereitgestellt' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ error: 'Ungültiger Token' });
  }
};

//----------------------------------------------- LOGIN

app.post('/register', async (req, res) => {
  const { first_name, last_name, email, password, class_level, is_teacher } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    // INSERT EIN USER:
    const query = 'INSERT INTO users (first_name, last_name, email, password, class_level, is_teacher) VALUES (?, ?, ?, ?, ?, ?)';

    connection.query(query, [first_name, last_name, email, hashedPassword, class_level, is_teacher], (err, _) => {
      if (err) {
        console.error('Fehler beim Erstellen des Benutzers:', err);
        return res.status(500).json({ error: 'Datenbankfehler' });
      }
      res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
    });
  } catch (error) {
    console.error('Fehler beim Hashen des Passworts:', error);
    res.status(500).json({ error: 'Serverfehler' });
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ?';

  connection.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen des Benutzers:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Ungültige E-Mail oder Passwort' });
    }

    const user = results[0];

    try {
      if (await bcrypt.compare(password, user.password)) {
        // Create JWT token
        const token = jwt.sign(
          { 
            userId: user.id, 
            email: user.email, 
            firstName: user.first_name, 
            lastName: user.last_name,
            isTeacher: user.is_teacher || false
          },
          JWT_SECRET,
          { expiresIn: '12h' }
        );

        res.status(200).json({ message: 'Erfolgreich eingeloggt', token });
      } else {
        res.status(401).json({ error: 'Ungültige E-Mail oder Passwort' });
      }
    } catch (error) {
      console.error('Fehler beim Vergleichen der Passwörter:', error);
      res.status(500).json({ error: 'Serverfehler' });
    }
  });
});

//----------------------------------------------- USERS

// Get all students (non-teacher users) with their class information
app.get('/users/students', verifyToken, (req, res) => {
  const query = `
    SELECT 
      u.id,
      u.first_name,
      u.last_name,
      u.email,
      c.level,
      c.id as class_id,
      c.name as class_name
    FROM users u
    LEFT JOIN user_classes uc ON u.id = uc.user_id
    LEFT JOIN classes c ON uc.class_id = c.id
    WHERE u.is_teacher = false
    ORDER BY u.last_name, u.first_name
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Schüler:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    res.json({
      success: true,
      data: results
    });
  });
});


// EDIT an existing user
app.put('/users/update/:id', verifyToken, (req, res) => {
  const { first_name, last_name, email, class_level, is_teacher } = req.body;
  const { id } = req.params;

  const query = 'UPDATE users SET first_name = ?, last_name = ?, email = ?, class_level = ?, is_teacher = ? WHERE id = ?';
  connection.query(query, [first_name, last_name, email, class_level, is_teacher ? true : false, id], (err, result) => {
    if (err) {
      console.error('Fehler beim Aktualisieren des Benutzers:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Benutzer nicht gefunden' });
    }
    res.json({ message: 'Benutzer erfolgreich aktualisiert' });
  });
});

// DELETE an existing user
app.delete('/users/delete/:id', verifyToken, (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM users WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) {
      console.error('Fehler beim Löschen des Benutzers:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Benutzer nicht gefunden' });
    }
    res.json({ message: 'Benutzer erfolgreich gelöscht' });
  });
});


//----------------------------------------------- CLASSES

// POST create new class
app.post('/classes/create', verifyToken, (req, res) => {
  if (!req.user.isTeacher) {
    return res.status(403).json({
      success: false,
      error: 'Nur Lehrer können Klassen erstellen'
    });
  }

  const { level, name, comment } = req.body;

  if (!level || !name) {
    return res.status(400).json({
      success: false,
      error: 'Level und Name sind erforderlich'
    });
  }

  const query = 'INSERT INTO classes (level, name, comment) VALUES (?, ?, ?)';
  const values = [level.trim(), name.trim(), comment ? comment.trim() : null];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Fehler beim Erstellen der Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    res.status(201).json({
      success: true,
      data: {
        id: result.insertId,
        level,
        name,
        comment
      }
    });
  });
});

// GET all
app.get('/classes/all', verifyToken, (req, res) => {
  const query = 'SELECT * FROM classes ORDER BY level, name';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Klassen:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// GET single class
app.get('/classes/byId/:id', verifyToken, (req, res) => {
  const query = 'SELECT * FROM classes WHERE id = ?';

  connection.query(query, [req.params.id], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        error: 'Klasse nicht gefunden'
      });
    }

    res.json({
      success: true,
      data: results[0]
    });
  });
});

// PUT update class
app.put('/classes/update/:id', verifyToken, (req, res) => {
  if (!req.user.isTeacher) {
    return res.status(403).json({
      success: false,
      error: 'Nur Lehrer können Klassen bearbeiten'
    });
  }

  const { level, name, comment } = req.body;

  if (!level || !name) {
    return res.status(400).json({
      success: false,
      error: 'Level und Name sind erforderlich'
    });
  }

  const query = 'UPDATE classes SET level = ?, name = ?, comment = ? WHERE id = ?';
  const values = [level.trim(), name.trim(), comment ? comment.trim() : null, req.params.id];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Fehler beim Aktualisieren der Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Klasse nicht gefunden'
      });
    }

    res.json({
      success: true,
      data: {
        id: parseInt(req.params.id),
        level,
        name,
        comment
      }
    });
  });
});

// DELETE class
app.delete('/classes/:id', verifyToken, (req, res) => {
  if (!req.user.isTeacher) {
    return res.status(403).json({
      success: false,
      error: 'Nur Lehrer können Klassen löschen'
    });
  }

  const query = 'DELETE FROM classes WHERE id = ?';

  connection.query(query, [req.params.id], (err, result) => {
    if (err) {
      console.error('Fehler beim Löschen der Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Klasse nicht gefunden'
      });
    }

    res.json({
      success: true,
      message: 'Klasse erfolgreich gelöscht'
    });
  });
});

//----------------------------------------------- STUDENT - CLASS

// Assign user to class
app.post('/user-classes/assign', verifyToken, (req, res) => {
  if (!req.user.isTeacher) {
    return res.status(403).json({
      success: false,
      error: 'Nur Lehrer können Benutzer zu Klassen zuweisen'
    });
  }

  const { userId, classId } = req.body;

  if (!userId || !classId) {
    return res.status(400).json({
      success: false,
      error: 'Benutzer-ID und Klassen-ID sind erforderlich'
    });
  }

  const query = 'INSERT INTO user_classes (user_id, class_id) VALUES (?, ?)';
  
  connection.query(query, [userId, classId], (err, result) => {
    if (err) {
      console.error('Fehler beim Zuweisen des Benutzers zur Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    res.status(201).json({
      success: true,
      message: 'Benutzer erfolgreich zur Klasse zugewiesen'
    });
  });
});

// Remove user from class
app.delete('/user-classes/remove', verifyToken, (req, res) => {
  if (!req.user.isTeacher) {
    return res.status(403).json({
      success: false,
      error: 'Nur Lehrer können Benutzer aus Klassen entfernen'
    });
  }

  const { userId, classId } = req.body;

  const query = 'DELETE FROM user_classes WHERE user_id = ? AND class_id = ?';

  connection.query(query, [userId, classId], (err, result) => {
    if (err) {
      console.error('Fehler beim Entfernen des Benutzers aus der Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Benutzer-Klassen-Zuordnung nicht gefunden'
      });
    }

    res.json({
      success: true,
      message: 'Benutzer erfolgreich aus der Klasse entfernt'
    });
  });
});

// Update user-class relationship
app.put('/user-classes/update', verifyToken, (req, res) => {
  if (!req.user.isTeacher) {
    return res.status(403).json({
      success: false,
      error: 'Nur Lehrer können Benutzer-Klassen-Zuordnungen aktualisieren'
    });
  }

  const { userId, oldClassId, newClassId } = req.body;

  if (!userId || !oldClassId || !newClassId) {
    return res.status(400).json({
      success: false,
      error: 'Alle IDs sind erforderlich'
    });
  }

  const query = 'UPDATE user_classes SET class_id = ? WHERE user_id = ? AND class_id = ?';

  connection.query(query, [newClassId, userId, oldClassId], (err, result) => {
    if (err) {
      console.error('Fehler beim Aktualisieren der Benutzer-Klassen-Zuordnung:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        error: 'Benutzer-Klassen-Zuordnung nicht gefunden'
      });
    }

    res.json({
      success: true,
      message: 'Benutzer-Klassen-Zuordnung erfolgreich aktualisiert'
    });
  });
});

// Get all classes for a user
app.get('/user-classes/user/:userId', verifyToken, (req, res) => {
  const query = `
    SELECT c.* 
    FROM classes c
    JOIN user_classes uc ON c.id = uc.class_id
    WHERE uc.user_id = ?
    ORDER BY c.level, c.name
  `;

  connection.query(query, [req.params.userId], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Klassen des Benutzers:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    res.json({
      success: true,
      data: results
    });
  });
});

// Get all users in a class
app.get('/user-classes/class/:classId', verifyToken, (req, res) => {
  const query = `
    SELECT u.id, u.first_name, u.last_name, u.email, u.class_level, u.is_teacher 
    FROM users u
    JOIN user_classes uc ON u.id = uc.user_id
    WHERE uc.class_id = ?
    ORDER BY u.last_name, u.first_name
  `;

  connection.query(query, [req.params.classId], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Benutzer in der Klasse:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }

    res.json({
      success: true,
      data: results
    });
  });
});



app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
