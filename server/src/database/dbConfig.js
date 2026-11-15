// const mysql = require('mysql2')

// // establishing connection to remote database
// const dbConfig = mysql.createPool({
//     host: 'localhost',
//     port: '3307',
//     user: 'root',
//     password: 'mysql@wb_2023',
//     database: 'tickets'
// })

// module.exports = dbConfig;

const mysql = require('mysql2');
require('dotenv').config();

const dbConfig = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 4000,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: true
    }
});

module.exports = dbConfig;