const platos = require("../platos");

module.exports = {
  home: (req, res) => {
    res.render("home", {
      platos: platos,
    });
  },
  detalleMenu: (req, res) => {
    const platobuscado = platos.find((plato) => {
      return plato.id == req.params.id;
    });
    if (platobuscado) {
      res.render("detalleMenu", {
        plato: platobuscado,
      });
    } else {
      res.send("404 - Plato no encontrado");
    }
  },
};
