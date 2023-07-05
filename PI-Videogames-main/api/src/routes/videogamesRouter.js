const videogamesRouter=require("express").Router();
const {getAllVideogames}=require("../controllers/getVideogames");

videogamesRouter.get("/", async (req, res)=>{
    try{
        const response= await getAllVideogames();
        if(response.error){
            return res.status(400).json(response)
        }   
        res.status(200).json(response) 
    } catch(error){
        res.status(400).json({error: error.message})
    }
})

module.exports=videogamesRouter;