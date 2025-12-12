import React, { useState } from 'react';
import '../css/add.css';
import axios from 'axios';
import ResultCart from './ResultCart';


function Add() {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function onChange(e) {
    const value = e.target.value;
    setQuery(value);

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=39c0be8ffee709c283d51ace31adf9b5&language=en-US&page=1&include_adult=false&query=${value}`;
      const res = await axios.get(url);
      setResults(res.data.results);
    } catch (error) {
      console.error("Hata:", error);
    }
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img src="https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg" />
          <div className="titels">
            <h1>Hoş Geldiniz. </h1>
            <h2>Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.</h2>
          </div>
          <div className="input-wrapper">
            <input 
              value={query}
              onChange={onChange}
              type="text"
              placeholder="Film, dizi, kişi, ara..." 
            />
          </div>
          
          {results.length > 0 && (
            <ul className='results' style={{ listStyleType: 'none'}}>
              {results.map((movie)=>(
             <li key={movie.id}>
              <ResultCart movie={movie} />
             </li>
          ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Add;
