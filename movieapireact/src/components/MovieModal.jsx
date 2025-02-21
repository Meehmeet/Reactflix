import React from "react";
import "../styles/movie.css";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="modal" style={{ display: movie ? "flex" : "none" }}>      
      <div className="modal-content">
        <div className="modal-details">
          <h2>{movie.Title}</h2>
          <p><strong>Release Year:</strong> {movie.Year}</p>
          <p><strong>Metacritic:</strong> {movie.Metascore || "N/A"}/100</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Genres:</strong> {movie.Genre}</p>
          <p><strong>Languages:</strong> {movie.Language}</p>
          <p><strong>Country:</strong> {movie.Country}</p>
          <p><strong>Awards:</strong> {movie.Awards}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
        <img src={movie.Poster} alt="Movie Poster" className="movie-poster-modal" />
        <button onClick={onClose} className="close-button">
          <img src="./images/close.png" alt="Close" className="close-icon" />
        </button>
      </div>
    </div>
  );
}

export default MovieModal;