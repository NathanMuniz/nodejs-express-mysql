import mysql from 'mysql';
import { db } from '../config/dbConfig.js'


const connection = mysql.createConnection({
  host: db.HOST,
  root: db.ROOT,
  password: db.PASSWORD,
  database: db.DATABASE
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Successfully connectes to the database.")
});

export { connection };
