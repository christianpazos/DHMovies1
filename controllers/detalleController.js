const db = require('../models');


const detalleController = {
    detalle: function (req, res){
        db.Peliculas.findByPk(req.params.id, {
            include : [{association: 'generos'}, {association:'actores'}]
        })
        .then(function(pelicula){

            res.render('detalle', {pelicula: pelicula , usuario: req.session.usuarioLogueado, privilegio: req.session.privilegios});
        }).catch(function(error){

            console.log(error)
            res.status(500).send('Error de interno Intente mas tarde')
        })
      
      
      
        
        },

        editar: function(req, res) {

            let peliculaAEditar = db.Peliculas.findByPk(req.params.id);
            let generosAEditar = db.Generos.findAll();

            Promise.all([peliculaAEditar,generosAEditar])
                .then(function([pelicula, generos]) {

                    res.render('editarPelicula',{pelicula: pelicula, generos: generos})

                });

        },

        actualizar: function(req, res){

            db.Peliculas.update({
                title: req.body.titulo,
                rating: req.body.rating,
                awards: req.body.premios,
                release_date: req.body.release_date,
                length: req.body.duracion ,
                genre_id:req.body.genero
    
            },{ where: {
                id: req.params.id
            }})

            res.redirect('/detalle/' + req.params.id)
        },

        borrar:   function(req, res) {
            let peliculaId = req.params.id;
              db.Peliculas.destroy({ where: { id: peliculaId } })
            
             res.redirect('/');
            
           
    }


};


module.exports = detalleController;