function authMiddleware(req, res, next){
    if(req.session.usuarioLogueado != undefined && req.session.privilegios == 1) {

        next();

    } else {
        res.render('onlyAdmin')
    }


}

module.exports = authMiddleware;
