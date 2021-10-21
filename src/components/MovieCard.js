import React from 'react';
import { addFavourities  , removeFavourities} from '../actions';

class MovieCard extends React.Component {
    handelFavourite = ()=>{
        const { movie } = this.props;
        this.props.dispatch(addFavourities(movie))
    }
    handelUnFavourite = ()=>{
        const { movie } = this.props;
        this.props.dispatch(removeFavourities(movie))
    }

    render(){
        const { movie ,isFavourite } = this.props;
        return (
            <div className="movie-card">
                <div className = "left">
                    <img  alt = "movie-poster" src = {movie.Poster} />
                </div>
                <div className = "right">
                    <div className = "title"> { movie.Title }</div>
                    <div className = "plot"> { movie.Plot }</div>
                    <div className = "footer">
                        <div className = "rating"> { movie.imdbRating} </div>
                        {
                            isFavourite
                            ?<button className = "unfavourite-btn" onClick = {this.handelUnFavourite}>UnFavourite</button>
                            :<button className = "favourite-btn" onClick = {this.handelFavourite}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
          );    
    }
}

export default MovieCard;