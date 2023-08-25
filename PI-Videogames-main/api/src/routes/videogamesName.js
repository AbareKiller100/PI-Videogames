// const videogamesName=require("express").Router();
// const getVideogameByName=require("../controllers/getGameByName")

// videogamesName.get("/", async (req, res)=>{
//     const {name}=req.query
//     try {
//         const response= await getVideogameByName(name);
//         res.status(200).json(response)
//     } catch (error) {
//         res.status(400).json({error:error.message}) 
//     }
// })

// module.exports=videogamesName;