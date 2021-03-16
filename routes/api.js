const authRoute = require("@app/auth/auth.route");

module.exports = (app) => {
  authRoute(app);
};
