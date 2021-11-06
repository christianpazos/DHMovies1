const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController')
const { check, validiracionResult, body } = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware')
const isLogMiddleware = require('../middlewares/isLogMiddleware')


router.get('/',isLogMiddleware, loginController.login);

router.post('/', [check('email').isEmail(), check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener mas de 8 caracteres')], loginController.processLogin);


//PRUEBA
router.get('/check',authMiddleware, function(req, res){
    
    if(req.session.usuarioLogueado == 'undefined') {
        res.send('NO ESTAS LOGUERO ');
    }else {
        res.send('ESTAS LOGUEADO CON' + req.session.usuarioLogueado)
    }

})


module.exports = router;