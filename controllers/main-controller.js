const platos = require("../platos");

module.exports = {
    home: (req,res)=> {
        res.render ("home",{
            "platos": platos
        });

    },
    detalleMenu: (req,res)=> {
        res.render ("detalleMenu");
    },
    
    
};

