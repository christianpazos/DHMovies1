const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController')
const { check} = require('express-validator');

const isLogMiddleware = require('../middlewares/isLogMiddleware')

const validaciones = [check('email').isEmail().withMessage('Debes completar un correo  valido'), 
                      check('password').isLength({ min: 8 }).withMessage('La contraseña debe tener mas de 8 caracteres.'),
                      check('name').notEmpty().withMessage('Debe completar un nombre.'),
                        check('rol').notEmpty().withMessage('Debe selecionar un rol.')]


router.get('/',isLogMiddleware, registroController.registrar);
router.post('/',validaciones, isLogMiddleware,registroController.registrarUsuario)






module.exports = router;