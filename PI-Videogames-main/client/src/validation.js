const validation=(info)=>{
    const errors={};
    
    if(!info.name){
        errors.name="Debes incluir el nombre del juego"
    }

    if(!info.image || !/^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(info.image)){
        errors.image="Incluye imagen de videojuego, y en formato URL"
    }
        
    if(!info.description){
        errors.description="Incluye una descripción"
    }

    if(!info.platforms.length){
        errors.platforms="Nombra las plataformas para las que está disponible este título"
    }

    if(!info.released){
        errors.released="Incluye la fecha de lanzamiento"
    }

    if(!info.genres.length){
        errors.genres="Incluye los géneros del juego"
    }

    if(!info.rating || isNaN(info.rating)){
        errors.rating="Debes incluir una descripción"
    }

    return errors;
}

export default validation;