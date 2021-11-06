const db = require('../models');

const {
        check,
        body,
        validationResult,
} = require("express-validator");

const loginController = {
        login: function (req, res) {
                res.render("login");
        },

        processLogin: (req, res) => {
                
                         db.Usuarios.findAll({
                                where: { email: req.body.email, password: req.body.password }

                        }).then((resultado) => {
                                
                                if(resultado.length > 0){
                                console.log(resultado[0].dataValues.rol)

                                req.session.usuarioLogueado = resultado[0].dataValues.name;
                                req.session.privilegios = resultado[0].dataValues.rol;

                                if (req.body.recordame != undefined) {
                                        res.cookie('recordame', req.session.usuarioLogueado, { maxAge: 60000 })
                                }

                                        res.redirect('/')} else{
                                                return res.render("login", { errors: {
                                                        errors:{
                                                                msg: "Credenciales Invalidas"
                                                        }
                                                } } );
                                        }
                                        
                        }).catch(function (error) {

                                console.log(error)
                                
                        })

                        ///UNA VES LOGUEADO



                }
        




};

module.exports = loginController;