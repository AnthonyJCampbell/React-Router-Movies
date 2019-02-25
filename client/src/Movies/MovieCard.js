import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, movieList }) => {
  if (movieList) {
    return (
      <div className="movie-card">
        <Link to={`/movies/${movie.id}`} >
          <h2>{movie.title}</h2>
        </Link>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {movie.stars.map(star => {
            console.log(star);
            return (<div key={star} className="movie-star">
              {star}
            </div>);
          })}
      </div>
    )
  }
  else {
    return (
      <div className="movie-card">
          <h2>{movie.title}</h2>
          <div className="movie-director">
            Director: <em>{movie.director}</em>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{movie.metascore}</strong>
          </div>
          <h3>Actors</h3>

          {movie.stars.map(star => {
            return (<div key={star} className="movie-star">
              {star}
            </div>);
          })}
      </div>
    )
  }
};

export default MovieCard;
