import React from "react";
import "../styles/movie.css";


function MovieCard({ movie, onClick }) {
  const handleClick = () => onClick(movie.imdbID);
  
  return (
    <div className="movie" onClick={handleClick}>
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
    </div>
  );
}

export default MovieCard;