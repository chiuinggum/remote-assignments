const mysql = require('mysql2/promise');
const moment = require('moment');
require('dotenv').config();

async function connectToDatabase() {
    return await mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    });
}

function toFormattedDate(date) {
    return moment(date, 'ddd, DD MMM YYYY HH:mm:ss [GMT]').format('YYYY-MM-DD HH:mm:ss');
}

function toGMT(date) {
    return moment(date, "YYYY-MM-DD HH:mm:ss").format("ddd, DD MMM YYYY HH:mm:ss [GMT]");
}

module.exports = { connectToDatabase, toFormattedDate, toGMT };