const db = require('../models');
const { validationResult } = require("express-validator");


const registroController = {

    registrar: function (req, res) {
        res.render("registro");
    },

    registrarUsuario: function (req, res) {


        const validacionRegistro = validationResult(req);
        console.log(validacionRegistro)

        if (validacionRegistro.errors.length > 0) {
            res.render('registro', { errors: validacionRegistro.mapped(), oldData: req.body })
        } else {



            db.Usuarios.findAll({
                where: { email: req.body.email }

            }).then((resultado) => {
                if (resultado.length > 0) {
                    console.log("Este usuario ya existe")
                    res.render('registro', { errors: { errors: { msg: "Usuario Existente" } }, oldData: req.body })


                } else{

                let rol ;
                if (req.body.rol == 'admin') {
                    rol = 1;
                }else rol = 0;
        
                db.Usuarios.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    rol:rol
        
                }).then(
        
                     res.redirect('/login')
                )
            }

            })
        }

        
               
                


    }


};

module.exports = registroController;