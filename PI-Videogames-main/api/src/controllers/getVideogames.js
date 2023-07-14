require('dotenv').config();
const axios=require("axios");
const {URL} = require("../db");
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");

const getAllVideogames= async ()=>{
    try {
        console.log(URL);
        const {data}=await axios.get(`${URL}?key=${API_KEY}`);
        if(data && data.results.length>0){
            const videoGames=data.results.map(({id, name, background_image, genres, rating})=>{
                const generos=genres.map((genre)=> genre.name)
                return {
                    id, name, background_image, generos, rating
                }
            })
            return videoGames;
        } else{
            const videoGames=await Videogame.findAll();
            if(videoGames.length===0){return {error:"No se encontraron juegos."}}
            return videoGames;
        }
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los títulos")
    }
}

module.exports={getAllVideogames, URL}