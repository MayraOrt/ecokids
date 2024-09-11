const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

app.post('/register', async (req, res) => {
  const { first_name, last_name, email, password, class_level } = req.body;

  try {

    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (first_name, last_name, email, password, class_level) VALUES (?, ?, ?, ?, ?)';

    connection.query(query, [first_name, last_name, email, hashedPassword, class_level], (err, results) => {
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
          { userId: user.id, email: user.email, firstName: user.first_name, lastName: user.last_name},
          JWT_SECRET,
          { expiresIn: '1h' }
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

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});