const mysql = require('mysql');

const Connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cast8570',
    database: 'movies-controll'
})

module.exports = Connection;
