const getAllVideogames= require("../controllers/getVideogames")
const getGameById=require("../controllers/getGameByID")
const getVideogameByName=require("../controllers/getGameByName")
const createNewGame=require("../controllers/createVideogame")

const getVideogamesHandler = async (req,res)=>{
    try {
        const respose = await getAllVideogames()
        res.status(200).json(respose)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getIDHandler = async (req,res)=>{
    const {idVideogame} = req.params
    const dat = isNaN(idVideogame) ? 'bd' : 'api' 
    try {
        const respose = await getGameById(idVideogame,dat);
        res.status(200).json(respose)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getNameHandler = async (req,res)=>{
    const {name} = req.query;
    try {
        if(name){
            const response = await getVideogameByName(name);
            res.status(200).json(response)
        }else 
            res.status(200).send('No se agrego ningun nombre')
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createHandler = async (req,res)=>{
    const {name,description,platforms,
        background_image,released,rating,genres} = req.body
    try {
        const response = await createNewGame(name,description,platforms,
            background_image,released,rating,genres)
        res.status(200).send('Successfully added')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={
    getVideogamesHandler, getIDHandler, getNameHandler, createHandler
}