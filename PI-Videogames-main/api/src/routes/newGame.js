const newGame=require("express").Router();
const createNewGame=require("../controllers/createVideogame");

newGame.post("/", async (req, res)=>{
    const {name, description, background_image, genres, platforms, released, rating}=req.body;
    try {
        const response= await createNewGame(name, description, background_image, genres, platforms, released, rating);
        if(response.error){ return res.status(400).json({error: error.message}) }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

module.exports=newGame;