export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITIES = "ADD_TO_FAVOURITIES";
export const REMOVE_FROM_FAVOURITIES = "REMOVE_FROM_FAVOURITIES";
export const SET_SHOW_FAVOURITIES = "SET_SHOW_FAVOURITIES";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    movies,
  };
}

export function addFavourities(movie) {
  return {
    type: "ADD_TO_FAVOURITIES",
    movie,
  };
}
export function removeFavourities(movie) {
  return {
    type: "REMOVE_FROM_FAVOURITIES",
    movie,
  };
}
export function setShowFavourities(val) {
  return {
    type: "SET_SHOW_FAVOURITIES",
    val: val,
  };
}

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}
export function handleMovieSearch(searchText) {
  const url = `http://www.omdbapi.com/?apikey=b7fe7c90&t=${searchText}`;
  return function (dispatch) {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        dispatch(addMovieSearchResult(movie));
      });
  };
}

export function addMovieSearchResult(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
