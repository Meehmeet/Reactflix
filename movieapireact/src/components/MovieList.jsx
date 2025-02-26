import React from "react";
import MovieCard from "./MovieCard";
import "../styles/movie.css";

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