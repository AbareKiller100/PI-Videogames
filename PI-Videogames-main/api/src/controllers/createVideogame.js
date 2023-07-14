const {Videogame, Genre}=require("../db");

const createNewGame= async (name, description, background_image, genres, platforms, released, rating)=>{
    try{
        if(!name || !description || !background_image || !genres.length || !platforms.length || !released || !rating){
            return {error: "Faltan datos"}
        }
        const newGame= await Videogame.create({name, description, background_image, genres, platforms, released, rating});
        newGame.addGenres(genres);
        
        return newGame;
    } catch(error){
        console.error(error);
        throw new Error("Error al crear videojuego", error);
    }
}

module.exports=createNewGame;