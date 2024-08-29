const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000; 

app.use(express.json()); 
app.use(cors()); 

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'crud'
});

connection.connect((err) => {
  if (err) {
    console.error('Not connected with database:', err);
    return;
  }
  console.log('Connected with database');
});

app.post('/api/create', (req, res) => {
  const { name, age } = req.body;

  const query = 'INSERT INTO users (name, age) VALUES (?, ?)';
  connection.query(query, [name, age], (err, results) => {
    if (err) {
      console.error('Error saving data', err);
      res.status(500).json({ message: 'Error saving data' });
      return;
    }
    res.status(200).json({ message: 'Saving data' });
  });
});

app.listen(port, () => {
  console.log(`Server port ${port}`);
});