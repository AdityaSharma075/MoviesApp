import { ADD_MOVIES , ADD_TO_FAVOURITIES , REMOVE_FROM_FAVOURITIES , SET_SHOW_FAVOURITIES} from "../actions";


const initialMovieState = {
    list : [],
    favourities : [],
    showFavourites: false
}
export default function movies(state = initialMovieState , action){
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
        default : 
            return state;
        
    }
} 