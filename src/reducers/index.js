import { ADD_MOVIES , ADD_FAVOURITIES } from "../actions";


const initialMovieState = {
    list : [],
    favourities : []
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
        case ADD_FAVOURITIES : 
            return {
                ...state,
                favourities : [ action.movie ,...state.favourities ]
            };
        default : 
            return state;
        
    }
} 