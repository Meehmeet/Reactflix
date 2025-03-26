import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movie.css";

/**
 * Diese Komponente zeigt alle Movie-Karten als Grid
 * Verwaltet die Liste von Movies auf der Hauptseite
 */
function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-wrapper">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={onMovieClick} />
      ))}
    </div>
  );
}

export default MovieList;