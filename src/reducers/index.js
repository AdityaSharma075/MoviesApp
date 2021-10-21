import { combineReducers } from "redux";
import { ADD_MOVIES , ADD_TO_FAVOURITIES , REMOVE_FROM_FAVOURITIES , SET_SHOW_FAVOURITIES} from "../actions";


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
    console.log("Movie reducer");

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
        default : 
            return state;
        
    }
}
const  initialSearchState  = {
    result : {}
}
export function search (state = initialSearchState , action){
    console.log("Search reducer");
    return state;
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