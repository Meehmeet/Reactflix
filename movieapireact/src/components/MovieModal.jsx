import React from "react";
import "../styles/movie.css";

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const modalDetails = [
    { label: "Release Year", value: movie.Year },
    { label: "Metacritic", value: `${movie.Metascore || "N/A"}/100` },
    { label: "Runtime", value: movie.Runtime },
    { label: "Genres", value: movie.Genre },
    { label: "Languages", value: movie.Language },
    { label: "Country", value: movie.Country },
    { label: "Awards", value: movie.Awards },
    { label: "Plot", value: movie.Plot }
  ];

  return (
    <div className="modal" style={{ display: movie ? "flex" : "none" }}>      
      <div className="modal-content">
        <div className="modal-details">
          <h2>{movie.Title}</h2>
          {modalDetails.map(({ label, value }) => (
            <p key={label}><strong>{label}:</strong> {value}</p>
          ))}
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