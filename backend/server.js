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


//======== Insert Users ========= //
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

//========= Search Users ========= //
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).json({ message: 'Error fetching data:' });
      return;
    }
    res.status(200).json(results);
  });
});

//========== Delete Users ========//
app.delete('/api/delete/:userId', (req, res) => {
  
  const {userId} = req.params;
  
  const query = 'DELETE FROM users WHERE id = ?'

  connection.query(query, [userId], (err, results) => {
    if (err){
      console.error('Error deleting data', err);
      res.status(500).json({message: 'Erro deleted data'})
      return;
    }
    res.status(200).json({message: 'User deleted successfully'})
  })
  
})

app.listen(port, () => {
  console.log(`Server port ${port}`);
});