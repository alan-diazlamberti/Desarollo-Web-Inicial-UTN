var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

router.post("/", async (req, res, next) => {
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: "alan.diazlamberti@gmail.com",
    subject: "Contacto desde Sitio X",
    html:
      "Nombre:" +
      " " +
      nombre +
      "<br>" +
      "Apellido:" +
      " " +
      apellido +
      "<br>" +
      "Email:" +
      " " +
      email +
      "<br>" +
      "Telefono:" +
      " " +
      tel +
      "<br>" +
      "Mensaje:" +
      " " +
      mensaje,
  };

  var transport = nodemailer.createTransport({
    host: process.env.SMT_HOST,
    port: process.env.SMT_PORT,
    auth: {
      user: process.env.SMT_USER,
      pass: process.env.SMT_PASS,
    },
  });

  var info = await transport.sendMail(obj);

  res.render("index", {
    mesagge: "Mensaje enviado correctamente!",
  });
});
