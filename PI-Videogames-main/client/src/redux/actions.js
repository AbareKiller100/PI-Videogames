import axios from "axios"
import { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, REMOVE_DETAIL, GET_VIDEOGAMES_BY_NAME, FILTER, ORDENAR, GET_GENRES, } from "./action-types.js";
import { URL } from "../App.js";

export const getAllVideogames=()=>{
    return async function(dispatch){
        const {data}= await axios.get(`${URL}/videogames`)
        const allVideogames=data
        return dispatch({type:GET_ALL_VIDEOGAMES, payload:allVideogames});
    }
}

export const getVideogameByID=(id)=>{
    return async function(dispatch){
        const {data}= await axios.get(`${URL}/videogames/${id}`)
        const detailGame=data;
        return dispatch({type:GET_VIDEOGAMES_BY_ID, payload:data})
    }
}

export const removeDetail=()=>{
    return {type:REMOVE_DETAIL};
}

export const getVideogamesByName=(name)=>{
    return async function(dispatch){
        const {data}= await axios.get(`${URL}/videogames?name=${name}`)
        const games= data;
        return dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: games})
    }
}

export const filterOrigin=(origin, vGames)=>{
    return async function(dispatch){
        if(origin==="DB"){
            const res= await vGames;
            const videogames=[];
            for(let i = 0; i < res.length; i++){
                if(typeof res[i].id==="string"){
                    videogames.push(res[i]);
                }
            }
            return dispatch({type:FILTER, payload:videogames})
        } else if(origin==="API"){
            const res= await vGames;
            const videogames=[];
            for(let i = 0; i < res.length; i++){
                if(typeof res[i].id==="string"){
                    videogames.push(res[i]);
                }
            }
            return dispatch({type:FILTER, payload:videogames})
        } else{
            const videogames= await vGames;
            return dispatch({type:FILTER, payload:videogames})
        }
    }
}

export const ordenar= async (orden, vGames)=>{
    let videoGames= await vGames;
    switch(orden){
        case "A-Z":
            videoGames.sort((a, b)=>{
                if(a.name < b.name){
                    return -1;
                } else if(a.name > b.name){
                    return 1;
                } else{
                    return 0;
                }
            })
        case "Z-A":
            videoGames.sort((a, b)=>{
                if(a.name > b.name){
                    return -1;
                } else if(a.name < b.name){
                    return 1;
                } else{
                    return 0;
                }
            })
        case "ratAsc":
            videoGames.sort((a, b)=>{
                if(a.rating < b.rating){
                    return -1;
                } else if(a.rating > b.rating){
                    return 1;
                } else{
                    return 0;
                }
            })
        case "ratDes":
            videoGames.sort((a, b)=>{
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

    return {type:ORDENAR, payload:vGames};
}

export const getAllGenres=()=>{
    return async function(dispatch){
        const {data}= await axios.get(`${URL}/videogames/genres`)
        const genres= data;
        return dispatch({type: GET_GENRES, payload: genres});   
    }
}