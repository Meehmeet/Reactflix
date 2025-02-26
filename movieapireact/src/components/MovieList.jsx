import React, { memo } from "react";
import MovieCard from "./MovieCard";
import "../styles/movie.css";

const MovieList = memo(function MovieList({ movies, onMovieClick }) {
  const renderMovieCards = () => {
    return movies.map((movie) => (
      <MovieCard 
        key={movie.imdbID} 
        movie={movie} 
        onClick={onMovieClick} 
      />
    ));
  };

  return (
    <div className="movie-wrapper">
      {renderMovieCards()}
    </div>
  );
});

export default MovieList;