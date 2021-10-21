export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_TO_FAVOURITIES = "ADD_TO_FAVOURITIES";

export const REMOVE_FROM_FAVOURITIES = "REMOVE_FROM_FAVOURITIES";

export const SET_SHOW_FAVOURITIES = "SET_SHOW_FAVOURITIES";



export function addMovies(movies){
    return {
        type : "ADD_MOVIES",
        movies 
      }
}

export function addFavourities(movie){
  return {
      type : "ADD_TO_FAVOURITIES",
      movie 
    }
}
export function removeFavourities(movie){
  return {
      type : "REMOVE_FROM_FAVOURITIES",
      movie 
    }
}
export function setShowFavourities(val){
  return {
      type : "SET_SHOW_FAVOURITIES",
      val : val
    }
}