import React, { memo } from "react";
import "../styles/movie.css";

const MovieCard = memo(function MovieCard({ movie, onClick }) {
  const handleClick = () => {
    onClick(movie.imdbID);
  };

  const { Poster, Title } = movie;

  return (
    <div className="movie" onClick={handleClick}>
      <img 
        src={Poster} 
        alt={Title} 
        className="movie-poster"
        loading="lazy"
      />
    </div>
  );
});

export default MovieCard;