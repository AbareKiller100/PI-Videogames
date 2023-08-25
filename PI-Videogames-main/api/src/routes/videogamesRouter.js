const {Router} = require('express');
const videogamesRouter = Router();
const {
    getVideogamesHandler,
    getIDHandler,
    getNameHandler,
    createHandler
} = require('../handlers/videogamesHandler')

videogamesRouter.get('/', getVideogamesHandler)
videogamesRouter.get('/:idVideogame',getIDHandler)
videogamesRouter.get('/name',getNameHandler)
videogamesRouter.post('/',createHandler)

module.exports=videogamesRouter;