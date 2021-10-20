export const ADD_MOVIES = "ADD_MOVIES";

export const ADD_FAVOURITIES = "ADD_FAVOURITIES";

export function addMovies(movies){
    return {
        type : "ADD_MOVIES",
        movies 
      }
}

export function addFavourities(movie){
  return {
      type : "ADD_FAVOURITIES",
      movie 
    }
}