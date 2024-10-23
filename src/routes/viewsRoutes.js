const {Router}= require("express");
const { viewIndex, viewLoguin } = require("../controllers/viewsController");
const router= Router();

router.get ("/loguin", viewLoguin)
router.get ("/Inicio", viewIndex)

module.exports = router