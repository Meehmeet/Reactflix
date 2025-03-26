import React from "react";
import "../styles/movie.css";

/**
 * Diese Komponente zeigt eine Movie-Karte mit Poster
 * Wird für jedes Movie in der Liste benutzt
 */
function MovieCard({ movie, onClick }) {
  // Handler für Klicks auf die Karte
  const handleClick = () => onClick(movie.imdbID);
  
  return (
    <div className="movie" onClick={handleClick}>
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
    </div>
  );
}

export default MovieCard;