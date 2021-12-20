const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;