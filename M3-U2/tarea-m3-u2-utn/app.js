var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// Ejemplos de manejadores de rutas con la clase express.Router
var homeRouter = require("./routes/home");
var novedadesRouter = require("./routes/novedades");
var nosotrosRouter = require("./routes/nosotros");
var conocenosRouter = require("./routes/conocenos");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// Ejemplos de manejadores de rutas con la clase express.Router
app.use("/home", homeRouter);
app.use("/novedades", novedadesRouter);
app.use("/nosotros", nosotrosRouter);
app.use("/conocenos", conocenosRouter);

// Ejemplos de rutas simples
// app.get("/novedades", function (req, res) {
//   res.send("Novedades");
// });

// app.get("/nosotros", function (req, res) {
//   res.send("Nosotros");
// });

// app.get("/conocenos", function (req, res) {
//   res.send("Conocenos");
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
