const mysql = require("mysql");

const db = mysql.createConnection({
  host: "logindb.cvbgca0demho.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "dudtj321",
  database: "login_lecture",
})

db.connect();

module.exports = db;