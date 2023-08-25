const getAllGenres=require("../controllers/getGenres")

const genresHandler=async (req,res)=>{
    try {
        const response = await getAllGenres();
        res.status(200).json(response);
        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports= genresHandler;