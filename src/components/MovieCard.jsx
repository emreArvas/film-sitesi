import React from 'react'
import MovieControls from './MovieControls';
import '../css/icon.css';


const MovieCard = ({movie, type}) => {
  return (
    <div className='movie-card'>
        <div className="overlay"></div>
        {movie.poster_path ? (
            <img
            style={{ width: "175px", height: "275px", objectFit: "cover" }}
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={`${movie.title}`}
        />
      ) : (
        <div className="filler-poster"></div>
      )}

      <div className='kontrol'>
        <MovieControls  movie={movie} type={type}/>
      </div>
      

    </div>
  );
};

export default MovieCard