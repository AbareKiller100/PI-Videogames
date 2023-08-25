// require('dotenv').config();
const axios=require("axios");
const {URL} = require("../db");
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");

const getGameById=async (ID, dat)=>{
    try {
        if(dat==="api"){
        const {data} =await axios.get(`${URL}/games/${ID}?key=${API_KEY}`);
        const { id, name, description, platforms, background_image, released, rating, genres }= data;
        
        const generos= genres.map((genre)=> genre.name);   
        const plataformas=platforms.map((platform)=> platform.name)

        return { id, name, description, plataformas, background_image, released, rating, generos }

        } else{
            const detailVideoGame=await Videogame.findByPk(ID, {
                include:{
                    model:Genre,
                    attributes:["name"],
                    through:{
                        attributes:[]
                    }
                }
            }); 
            const { id, name, description, platforms, background_image, released, rating, Genres }=detailVideoGame;
            const generos= Genres.map((genre)=> genre.name); 
            
            return { id, name, description, platforms, background_image, released, rating, generos };
        }
    } catch (error) {
        console.error(error);
        throw new Error("No se encontró juego con este id", error);
    }
}
// getGameById(2)
module.exports=getGameById;