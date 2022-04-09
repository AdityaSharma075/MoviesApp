import React from "react";
import { connect } from "react-redux";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourities } from "../actions";
// import { connect } from "../index";
// import { search } from "../reducers";
// import { search } from '../reducers';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }
  isFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourities.indexOf(movie);
    if (index !== -1) {
      return true;
    }
    return false;
  };
  changeTab = (val) => {
    this.props.dispatch(setShowFavourities(val));
  };
  render() {
    const { movies, search } = this.props;
    const { list, favourities, showFavourites } = movies;

    console.log(showFavourites);
    const displayMovies = showFavourites ? favourities : list;

    return (
      <div className="App">
        <Navbar search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.changeTab(false)}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.changeTab(true)}
            >
              Favourities
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                dispatch={this.props.dispatch}
                isFavourite={this.isFavourite(movie)}
                key={`movies-${index}`}
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies"> No movies to display !!</div>
          ) : null}
        </div>
      </div>
    );
  }
}
// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//         {(store) => <App store = {store} />

//         }

//       </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search,
  };
}

const ConnectedAppComponent = connect(mapStateToProps)(App);

export default ConnectedAppComponent;
