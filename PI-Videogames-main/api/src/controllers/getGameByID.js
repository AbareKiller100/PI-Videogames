require('dotenv').config();
const axios=require("axios");
const {URL} = require("./getVideogames");
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");

const getGameById=async (id, dat)=>{
    try {
        console.log(dat);
        if(dat==="api"){
        const {data} =await axios.get(`${URL}/${id}?key=${API_KEY}`);
            console.log({
                id, 
                name:data.name, 
                background_image:data.background_image,
                genres:data.genres, 
                rating:data.rating
            });            
        } else{
            const detailVideoGame=await Videogame.findOne({where: {id}}); 
            return detailVideoGame;
        }
    } catch (error) {
        console.error(error);
        throw new Error("No se encontró juego con este id", error)   
    }
}

getGameById(2)

module.exports=getGameById