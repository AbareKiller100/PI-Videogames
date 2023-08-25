require('dotenv').config();
const axios=require("axios");
const {URL} = require("../db");
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");

const getAllVideogames= async ()=>{
    try {
        let URLs=`${URL}/games?key=${API_KEY}`;
        const videoGames=[];

        for(let i = 0; i < 5; i++){
            const {data} =await axios.get(URLs);

            const videogamesAPI=data.results.map(({id, name, background_image, genres, rating})=>{
                const generos=genres.map((genre)=> genre.name)
                videoGames.push({id, name, background_image, generos, rating})
            })
            URLs=data.next;
        }
            const videogamesDB=await Videogame.findAll({
                include:{
                    model: Genre,
                    attributes:["name"],
                    through:{
                        attributes:[]
                    }
                }
            })

            for(let i = 0; i < videogamesDB.length; i++){
                const {id, name, background_image, Genres, rating}=videogamesDB[i];
                const generos= Genres.map((gen)=> gen.name)
                videoGames.push({id, name, background_image, generos, rating})
            }

            return videoGames;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los títulos")
    }
}

module.exports= getAllVideogames