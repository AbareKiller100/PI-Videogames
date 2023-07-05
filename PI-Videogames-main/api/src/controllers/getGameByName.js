require('dotenv').config();
const axios=require("axios");
const URL = "https://api.rawg.io/api/games?search";
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");
const {Op}=require("sequelize")

const getVideogameByName=async (name)=>{
    try{
        const {data}=await axios.get(`${URL}=${name}&key=${API_KEY}`);
        if(data && data.results.length>0){
            const videogamesFilt=data.results.map(({id, name, background_image, genres, rating})=>{
                return {
                    id, name, background_image, genres, rating
                }
            })
            console.log( videogamesFilt);
        } else{
            const videogamesFilt=await Videogame.findAll({
                where: {[Op.iLike]:{name: `%${name}%`}}
            })

            if(videogamesFilt.length===0){
                return {error:"No existe este videojuego"}  
            }
            return videogamesFilt;
        }
    } catch(error){
        console.error(error);
        throw new Error("No existe este videojuego", error);
    }
}

getVideogameByName("gr")

module.exports=getVideogameByName;