import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import MovieCard from './MovieCard';
import '../css/wtchList.css';

function Watched() {
  const {watched} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className='heading'>İzlenen Filmler</h1>
        </div> 
        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) =>(
              <MovieCard movie={movie} type="watched"/>
            ) )}
          </div>
        ): (
          <h2 style={{fontSize:"40px", opacity:"0.8",color:"gray",marginLeft:"580px",marginTop:"100px"}}>Listenizde Film Yok...</h2>
        )}
      </div>
    </div>
  )
}

export default Watched