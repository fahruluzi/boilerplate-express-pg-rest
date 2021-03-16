require("module-alias/register");
require("express-group-routes");
require("dotenv").config();

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var cors = require("cors");
var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");
var port = process.env.API_PORT;

// router
const apiRouter = require("./routes/api");

// middleware
const generalMiddleware = require("@middleware/general");

var app = express();

// enable cors
app.use(
  cors({
    exposedHeaders: ["Content-Disposition"],
  })
);

app.use(express.json({ limit: "100mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(generalMiddleware);

// Swagger Settings
const swaggerDocument = require(`./swagger.json`);
const specs = swaggerJsdoc(swaggerDocument);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.group("/api", (router) => {
  apiRouter(router);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.sendError(err, err.message, err.status);
});

//server listening
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

module.exports = app;
