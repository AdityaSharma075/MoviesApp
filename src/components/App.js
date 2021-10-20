import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from '../actions';


class App extends React.Component {
  
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      this.forceUpdate(); 
    })
    store.dispatch(addMovies(data));

    console.log("state" , store.getState())
  }
  isFavourite = (movie)=>{
    const {favourities} = this.props.store.getState();
    const index =  favourities.indexOf(movie);
    if(index !== -1 ){
      return true;
    }
    return false;
  }
  render(){
    const {list} = this.props.store.getState();
    console.log('render' , this.props.store.getState())
    return (
      <div className="App">
        <Navbar />
        <div className = "main">
            <div className = "tabs">
                <div className = "tab">Movies</div>
                <div className = "tab">Favourities</div>
            </div>
            <div className = "list">
              {list.map((movie,index) => (
                <MovieCard movie = {movie} dispatch = {this.props.store.dispatch} isFavourite = {this.isFavourite(movie)}   key = {`movies-${index}`} />
              ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
