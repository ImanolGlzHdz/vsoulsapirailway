const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'roundhouse.proxy.rlwy.net',
    port: 24243,
    user:'root',
    password: 'E16A-2aH6BH6631-ffcBe6CGb-HBeAHb',
    database: 'vsouls_v9'
});

module.exports = {
    pool
};