import { combineReducers } from "redux";
import { ADD_MOVIES , ADD_TO_FAVOURITIES , REMOVE_FROM_FAVOURITIES , SET_SHOW_FAVOURITIES , ADD_MOVIE_TO_LIST ,ADD_SEARCH_RESULT} from "../actions";


const initialMovieState = {
    list : [],
    favourities : [],
    showFavourites: false
}
export function movies(state = initialMovieState , action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list : action.movies
    //     };
    // }
    // return state;
 

    switch(action.type) {
        case ADD_MOVIES : 
            return {
                ...state,
                list : action.movies
            };
        case ADD_TO_FAVOURITIES : 
            return {
                ...state,
                favourities : [ action.movie , ...state.favourities ]
            };
        case REMOVE_FROM_FAVOURITIES :
            const filterArray = state.favourities.filter(
                movie => movie.Title !== action.movie.Title 
            );
            return{
                ...state,
                favourities : filterArray
            }
        case SET_SHOW_FAVOURITIES :
            return{
                ...state,
                showFavourites : action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list],
            };
        default : 
            return state;
        
    }
}
const  initialSearchState  = {
    results: {},
    showSearchResults: false,
}
export function search (state = initialSearchState , action){
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
            ...state,
            results: action.movie,
            showSearchResults: true,
            };
        case ADD_MOVIE_TO_LIST:
            return {
            ...state,
            showSearchResults: false,
            };
        default:
            return state;
    } 
}
// const initialRootState = {
//     movies : initialMovieState,
//     search : initialSearchState
// }
// export default function rootReducer(state = initialRootState , action){
//     return{
//         movies :movies(state.movies , action),
//         search : search(state.search , action)
//     }
// }
export default  combineReducers({
    movies,
    search
});