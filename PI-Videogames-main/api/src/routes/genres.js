const genres=require("express").Router();
const getAllGenres=require("../controllers/getGenres")

genres.get("/", async (req, res)=>{
    try {
        const response= await getAllGenres();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports=genres;