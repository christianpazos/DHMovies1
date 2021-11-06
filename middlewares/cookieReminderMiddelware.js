function cookieReminderMiddelware(req, res, next){
    if(req.cookie.recordame != undefined && req.session.usuarioLogueado == undefined) {

        next();

    } else {
        res.send('Ya estas Logueado como: ' + req.session.usuarioLogueado)
    }


}

module.exports = cookieReminderMiddelware;