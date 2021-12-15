const express = require('express');
const mysql = require('mysql2')
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // your mysql username
        user: 'root',
        password: 'r053Go[d',
        database: 'election'
    },
    console.log('Connected to the election database.')
)

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Sever running on port ${PORT}`)
})