// TODO: Establish connection to mysql database
const mysql = require('mysql');

const dbName = 'pokedex';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: dbName
});

db.connect((err) => {
  if (err) {
    console.log('couldn\'t connect to database');
  } else {
    console.log(`connected to database: ${dbName}`);
  }
});

module.exports = db;
