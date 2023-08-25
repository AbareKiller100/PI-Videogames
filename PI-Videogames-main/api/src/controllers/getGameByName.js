// require('dotenv').config();
const axios=require("axios");
const {URL} = require("../db");
const {API_KEY} = require("../db");
const { Videogame, Genre }=require("../db");
const {Op}=require("sequelize")

const getVideogameByName=async (nameTitle)=>{
    try{
        const videogamesArray=[];
        const {data}=await axios.get(`${URL}/games?search=${nameTitle}&key=${API_KEY}`);
        // if(data && data.results.length>0){
            for(let i = 0; i < 15; i++){
                const { id, name, background_image, genres, rating }=data.results[i];

                const generos= genres.map((genre)=> genre.name);
                
                videogamesArray.push({ id, name, background_image, generos, rating })
            }
        // } else{
            const videogamesFilt=await Videogame.findAll({
                where: {
                    name:{[Op.iLike]: `%${nameTitle}%`}
                },
                include:{
                    model:Genre,
                    attributes:["name"],
                    through:{
                        attributes:[]
                    }
                }
            })

            if(videogamesFilt.length>0){
                for(let i = 0; i < videogamesArray.length; i++){
                    const { id, name, background_image, Genres, rating }=videogamesFilt[i];
                    const generos= Genres.map((genre)=> genre.name);
                    videogamesArray.push({ id, name, background_image, generos, rating })
                }
            }
        // }
        return videogamesArray
    } catch(error){
        console.error(error);
        throw new Error("No existe este videojuego", error);
    }
}

//  getVideogameByName("the")

module.exports=getVideogameByName;