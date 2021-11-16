var mysql = require('mysql');
const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : 'moon',
    database : 'user'
});

module.exports = db;