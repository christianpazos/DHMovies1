const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController')
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', indexController.listado)
router.get('/crear',authMiddleware, indexController.crear)
router.post('/crear',authMiddleware, indexController.guardar)

module.exports = router;
