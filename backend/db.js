// db.js
const mysql = require('mysql2/promise');
require('dotenv').config();

// Create a connection pool to your remote MySQL domain
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Uncomment if your hosting provider requires SSL (e.g., Aiven, AWS RDS, PlanetScale)
  // ssl: {
  //   rejectUnauthorized: true
  // }
});

// Helper function to test connection on startup
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log(' Successfully connected to remote MySQL database!');
    connection.release();
  } catch (error) {
    console.error(' Database connection failed:', error.message);
  }
}

testConnection();

module.exports = pool;