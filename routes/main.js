const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.home);
router.get("/detalle/:id", mainController.detalleMenu);

module.exports = router;
