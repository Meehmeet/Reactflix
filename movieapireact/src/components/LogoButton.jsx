import React, { memo } from "react";
import "../styles/movie.css";

const LogoButton = memo(function LogoButton({ onClick }) {
  const handleLogoClick = () => {
    onClick();
  };

  return (
    <div className="image-wrapper">
      <img src="./images/Nachos.png" alt="nacho" className="nacho-img" />
      <button onClick={handleLogoClick} className="logo-button">
        <img src="./images/Kasflix.png" alt="movie" className="logo-img" />
      </button>
    </div>
  );
});

export default LogoButton;