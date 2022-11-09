const db = require('mysql');
const dbConfig = require('./config/dbconfig.js')


const connetion = db.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  database: dbConfig.DB,
  password: dbConfig.PASSWORD
});


connetion.connect(err => {
  if (err) {
    console.log("Fail connect!" + err);
  }
  console.log("Connected")
})



module.exports = connetion;
