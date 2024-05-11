const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345$aurora",
    database:"demography_db"  
});

module.exports = db;