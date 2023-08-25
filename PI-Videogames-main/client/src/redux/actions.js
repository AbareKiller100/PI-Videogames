import axios from "axios"
import { GET_ALL_VIDEOGAMES, 
        GET_VIDEOGAMES_BY_ID, 
        REMOVE_DETAIL, 
        GET_VIDEOGAMES_BY_NAME, 
        FILTER, 
        ORDENAR, 
        GET_GENRES } from "./action-types.js";

export const getAllVideogames=()=>{
    return async function(dispatch){
        try {
            const URL="http://localhost:3001/videogames"
            const response= await axios.get(URL)
            const allVideogames=response.data;
            return dispatch({type:GET_ALL_VIDEOGAMES, payload:allVideogames});
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const getVideogameByID=(id)=>{
    return async function(dispatch){
        try {
            const URL="http://localhost:3001/videogames"
            const {data}= await axios.get(`${URL}/${id}`)
            const detailGame=data;
            return dispatch({type:GET_VIDEOGAMES_BY_ID, payload:detailGame})
        } catch (error) {
        throw new Error(error);
        }
    }
}

export const removeDetail=()=>{
    return {type:REMOVE_DETAIL};
}

export const getVideogamesByName=(name)=>{
    return async function(dispatch){
        try {
            const URL="http://localhost:3001/videogames"
            const {data}= await axios.get(`${URL}?name=${name}`)
            const games= data;
            return dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: games})
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const filterOrigin=(origin, vGames)=>{
    return async function(dispatch){
        try {
            if(origin==="DB"){
                const res= await vGames;
                let videogames=[];
                for(let i = 0; i < res.length; i++){
                    if(typeof res[i].id==="string"){
                        videogames.push(res[i]);
                    }
                }
                return dispatch({type:FILTER, payload:videogames})
            } else if(origin==="API"){
                const res= await vGames;
                let videogames=[];
                for(let i = 0; i < res.length; i++){
                    if(typeof res[i].id==="number"){
                        videogames.push(res[i]);
                    }
                }
                return dispatch({type:FILTER, payload:videogames})
            } else{
                const videogames= await vGames;
                return dispatch({type:FILTER, payload:videogames})
            }
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const ordenar= (orden, vGames)=>{
    return async function(dispatch){
    let videoGames= await vGames;
    switch(orden){
        case "A-Z":
            return videoGames.sort((a, b)=>{
                if(a.name < b.name){
                    return -1;
                } else if(a.name > b.name){
                    return 1;
                } else{
                    return 0;
                }
            })
        case "Z-A":
            return videoGames.sort((a, b)=>{
                if(a.name > b.name){
                    return -1;
                } else if(a.name < b.name){
                    return 1;
                } else{
                    return 0;
                }
            })
        case "ratAsc":
            return videoGames.sort((a, b)=>{
                if(a.rating < b.rating){
                    return -1;
                } else if(a.rating > b.rating){
                    return 1;
                } else{
                    return 0;
                }
            })
        case "ratDes":
            return videoGames.sort((a, b)=>{
                if(a.rating > b.rating){
                    return -1;
                } else if(a.rating < b.rating){
                    return 1;
                } else{
                    return 0;
                }
            })
        default:
            break;
    }

    return dispatch({type:ORDENAR, payload:vGames});
}
}

export const getAllGenres=()=>{
    return async function(dispatch){
        try {
            const URL="http://localhost:3001/genres"
            const {data}= await axios.get(URL)
            const genres= data;
            return dispatch({type: GET_GENRES, payload: genres});   
        } catch (error) {
            throw new Error(error);
        }
    }
}