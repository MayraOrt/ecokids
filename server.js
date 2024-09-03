const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const port=  3307;

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // Zulassen von Anfragen von diesem Origin
}));


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ökohelden',
  port: '3307',
});

connection.connect((err) => {
  if (err) {
    console.error('Fehler bei der Verbindung zur Datenbank:', err);
    return;
  }
  console.log('Mit der MySQL-Datenbank verbunden.');
});
// Login Route

app.post('/register', async (req, res) => {
  const { first_name, last_name, email, password, class_level } = req.body;

  const query = 'INSERT INTO users (first_name, last_name, email, password, class_level) VALUES (?, ?, ?, ?, ?)';

  connection.query(query, [first_name, last_name, email, password, class_level], (err, results) => {
    if (err) {
      console.error('Fehler beim Erstellen des Benutzers:', err);
      return res.status(500).json({ error: 'Datenbankfehler' });
    }
    res.status(201).json({ message: 'Benutzer erfolgreich registriert' });
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
