const {Router} = require ("express");
const reservasController = require('../controllers/reservasController.js');
const router = Router();

router.get ("/loguin", reservasController)
module.exports = router