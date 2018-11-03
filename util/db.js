const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'academind_nodejs',
  password: 'apache2k'
});

module.exports = pool.promise();