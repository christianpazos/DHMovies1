function isLogMiddleware(req, res, next){
    if(req.session.usuarioLogueado == undefined) {

        next();

    } else {
        res.render('logeadoTrue', { name:req.session.usuarioLogueado})
    }


}

module.exports = isLogMiddleware;