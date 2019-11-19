const mysql = require('promise-mysql');
const fs = require('fs');

const truncate = 'TRUNCATE users';
const stmt = 'INSERT INTO users (id, predix, first_name, last_name, address, height, bitcoin_address, color_preference)  VALUES ?';

const dbConfigure = {
  host: '122.51.72.108',
  user: 'jsa',
  password: 'jsa2019epamsuzhou',
  database: 'JSA_EPAM',
};

let contents = fs.readFileSync('users.csv', 'utf8').split('\n');
contents = contents.map((item) => {
  const items = item.split(',');
  return items.map((i) => (i === '' ? null : i));
}).filter((item) => item.length === 8);
contents.shift(); // remove the header

let sqlConn = null;
mysql.createConnection(dbConfigure)
  .then((conn) => {
    sqlConn = conn;
    return sqlConn.query(truncate);
  })
  .then(() => sqlConn.query(stmt, [contents]))
  .catch(console.log)
  .finally(() => sqlConn.destroy());
