const { Pool } = require('pg')

class DBConnection {
  constructor() {
    this.connection = null;
    this.createConnection = this.createConnection.bind(this);
    this.closeConnection = this.closeConnection.bind(this);
  }

  async createConnection() {
    try {
      const pool = new Pool({
        user: process.env.POSTGRES_USERNAME,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DATABASE,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PASSWORD,
      })
      return pool;
    } catch (ex) {
      console.error(`Error connection : ${ex}`);
      throw ex;
    }
  }

  async closeConnection(connection) {
    try {
      await connection.end();
    } catch (ex) {
      console.error(ex.message);
      throw ex;
    }
  }
}

module.exports = DBConnection;
