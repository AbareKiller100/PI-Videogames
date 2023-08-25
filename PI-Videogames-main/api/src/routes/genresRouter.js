const {Router} = require('express');
const genresRouter= Router();

const genresHandler= require("../handlers/genresHandler")

genresRouter.get("/", genresHandler)

module.exports=genresRouter;