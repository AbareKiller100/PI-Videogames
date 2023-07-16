import { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, GET_VIDEOGAMES_BY_NAME, FILTER, ORDENAR  } from "./action-types";

const initialState={
    videoGames:[],
    videoGamesCopy:[],
    videoGamesDetail:{},
    genres:[]
};

const reducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_VIDEOGAMES:
            return {...state, videoGames:action.payload, videoGamesCopy:action.payload};

        case GET_VIDEOGAMES_BY_ID:
            return {...state, videoGamesDetail: action.payload}    
        
        case GET_VIDEOGAMES_BY_NAME:
            return {...state, videoGames: action.payload, videoGamesCopy: action.payload}
        
        case FILTER:
            return {...state, videoGames: action.payload, videoGamesCopy: action.payload}
        
        case ORDENAR:
            return {...state, }
        default:
            return {...state};
    }
}
