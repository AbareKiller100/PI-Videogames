// const videogamesID=require("express").Router();
// const getGameById=require("../controllers/getGameByID")

// videogamesID.get("/", async (req, res)=>{
//     const { id }=req.params;
//     const dat= isNaN(id) ? "bd" : "api"
//     try{
//         const response= await getGameById(id, dat);
//         res.status(200).json(response);
//     } catch(error){
//         res.status(400).json({error: error.message});
//     }
// })

// module.exports=videogamesID;