import { GET_ALL_VIDEOGAMES, GET_VIDEOGAMES_BY_ID, GET_VIDEOGAMES_BY_NAME, FILTER, ORDENAR, GET_GENRES, REMOVE_DETAIL  } from './action-types.js';

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

        case REMOVE_DETAIL:
            return {...state, videoGamesDetail:{}, genres:[]}
        
        case GET_VIDEOGAMES_BY_NAME:
            return {...state, videoGames: action.payload, videoGamesCopy: action.payload}
        
        case FILTER:
            return {...state, videoGamesCopy: action.payload}
        
        case ORDENAR:
            return {...state, videoGamesCopy:action.payload }

        case GET_GENRES:
            return {...state, genres:action.payload}

        default:
            return {...state};
    }
}

export default reducer;
