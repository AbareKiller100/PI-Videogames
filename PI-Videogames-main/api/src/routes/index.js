const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const videogamesRouter=require("./videogamesRouter");
const videogamesID=require("./videogamesID");
const videogamesName=require("./videogamesName");
const newGame=require("./newGame");
const genres=require("./genres")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogamesRouter);
router.use("/videogames/:id", videogamesID);
router.use("/videogames?name=", videogamesName);
router.use("/videogames", newGame);
router.use("/genres", genres);

module.exports = router;
