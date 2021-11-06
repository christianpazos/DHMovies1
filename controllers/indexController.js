const db = require('../models');


const indexController = {
    listado: function (req, res){
        
            db.Peliculas.findAll()
                .then(function(peliculas){
                    res.render('index', {peliculas: peliculas, usuario: req.session.usuarioLogueado} );

                }).catch(function(error){

                    console.log(error)
                    res.status(500).send('Error de conexion')
                })
                
                
    },

    crear: function (req,res){

        db.Generos.findAll()
        .then(function(generos){
            res.render('crearPelicula', {generos: generos});


        }).catch(function(error){

            console.log(error)
            res.status(500).send('Error de interno Intente mas tarde')
        })},


    guardar: function(req, res){

        db.Peliculas.create({
            title: req.body.titulo,
            rating: req.body.rating,
            awards: req.body.premios,
            release_date: req.body.release_date,
            length: req.body.duracion ,
            genre_id:req.body.genero

        })
        .then(function(){
            res.redirect('/');
        }).catch(function(error){

            console.log(error)
            res.status(500).send(error.parent.sqlMessage)
        })
    }
        

    

};


module.exports = indexController; 