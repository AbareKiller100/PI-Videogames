const axios=require("axios");
const {URL} = require("../db");
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");

const getAllGenres= async ()=>{
    try {
        const { data }= await axios.get(`${URL}/genres?key=${API_KEY}`);
            const allGenres= data.results.map((genre)=> genre.name);

        for(let i = 0; i < allGenres.length; i++){
            let name= allGenres[i];
            const genresDB= await Genre.create({name}); 
        }

        return allGenres;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener los géneros", error)
    }
}

module.exports=getAllGenres;