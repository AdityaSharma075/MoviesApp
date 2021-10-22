import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies  , setShowFavourities} from '../actions';


class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('Updated');
      this.forceUpdate(); 
    })
    store.dispatch(addMovies(data));

    console.log("state" , store.getState())
  }
  isFavourite = (movie)=>{
    const {movies} = this.props.store.getState();
    const index =  movies.favourities.indexOf(movie);
    if(index !== -1 ){
      return true;
    }
    return false;
  }
  changeTab = (val) => {
    
    this.props.store.dispatch(setShowFavourities(val));
  }
  render(){ 
    const {movies  } =this.props.store.getState();
    const {list , favourities , showFavourites} = movies;
    console.log('render' , this.props.store.getState())
    console.log(showFavourites);
    const displayMovies = showFavourites ? favourities : list;
    
    return (
      <div className="App">
        <Navbar store={this.props.store} />
        <div className = "main">
            <div className = "tabs">
                <div className = {`tab ${showFavourites ? '' : 'active-tabs' }`} onClick = { ()=> this.changeTab(false)}>Movies</div>
                <div className = {`tab ${ showFavourites ? 'active-tabs' : '' }`}  onClick = { ()=>this.changeTab(true)}>Favourities</div>
            </div>
            <div className = "list">
              {displayMovies.map((movie,index) => (
                <MovieCard 
                  movie = {movie} 
                  dispatch = {this.props.store.dispatch} 
                  isFavourite = {this.isFavourite(movie)}   
                  key = {`movies-${index}`} />
              ))}
            </div>
            {displayMovies.length === 0  ? <div className = "no-movies"> No movies to display !!</div>:null }
        </div>
      </div>
    );
  }
}

export default App;
