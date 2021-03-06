const mysql = require('mysql');

const dnConfigure = {
  host: process.env.DB_SERVER,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DEFAULT,
  multipleStatements: true,
};

const connection = mysql.createConnection(dnConfigure);
connection.connect((err) => {
  if (err) {
    console.log(`Error:: Failed to connect to database. Detail: ${err.message}`);
  } else {
    console.log('Log:: database connection established.');
  }
});

module.exports = connection;
