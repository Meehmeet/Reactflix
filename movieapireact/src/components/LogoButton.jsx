import React from "react";
import "../styles/movie.css";

function LogoButton({ onClick }) {
  return (
    <div className="image-wrapper">
      <img src="./images/Nachos.png" alt="nacho" className="nacho-img" />
      <button onClick={onClick} className="logo-button">
        <img src="./images/Kasflix.png" alt="movie" className="logo-img" />
      </button>
    </div>
  );
}

export default LogoButton;