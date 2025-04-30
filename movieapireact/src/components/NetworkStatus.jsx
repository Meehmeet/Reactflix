import React from "react";
import "../styles/movie.css";

function NetworkStatus() {
  return (
    <div className="network-warning">
      <div className="network-warning-content">
        <span className="warning-icon">⚠️</span>
        <p>Keine Internet-Verbindung! Die API kann keine Filme laden.</p>
        <p>Bitte überprüfe deine Verbindung und versuche es erneut.</p>
      </div>
    </div>
  );
}

export default NetworkStatus; 