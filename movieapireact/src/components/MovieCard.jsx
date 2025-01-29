import React from "react";
import "../styles/movie.css";

function MovieCard({ movie, onClick }) {
  return (
    <div className="movie" onClick={() => onClick(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
    </div>
  );
}

export default MovieCard;