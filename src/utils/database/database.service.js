const DBConnection = require("./database.connection");

class DBService {
  constructor() {
    this.dbConnection = new DBConnection();
  }

  async query(query, queryData = []) {
    try {
      const connection = await this.dbConnection.createConnection();
      try {
        const data = await connection.query(query, queryData);
        await this.dbConnection.closeConnection(connection);

        return {
          data: data,
          errors: null,
        };
      } catch (error) {
        await this.dbConnection.closeConnection(connection);
        return {
          data: null,
          errors: error,
        };
      }
    } catch (err) {
      return {
        data: null,
        errors: err,
      };
    }
  }

  async one(query, queryData = []) {
    const result = await this.query(query, queryData);
    if (result.data && result.data.length > 0) {
      result.data = result.data[0];
    } else {
      result.data = null;
    }
    return result;
  }
}

module.exports = DBService;
