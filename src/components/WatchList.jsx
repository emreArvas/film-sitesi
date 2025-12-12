import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';
import '../css/wtchList.css';

function WatchList() {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className='heading'>İzlenecek Filmler</h1>
        </div> 
        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) =>(
              <MovieCard movie={movie} key={movie.id} type="watchlist"/>
            ) )}
          </div>
        ) : (
          <h1 style={{fontSize:"40px", opacity:"0.8",color:"gray",marginLeft:"580px",marginTop:"100px"}}>Listenizde Film Yok...</h1>
        )}
      </div>
    </div>
  )
}

export default WatchList