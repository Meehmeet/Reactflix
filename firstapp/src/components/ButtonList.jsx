import React from "react";

function ButtonList({ buttons }) {
    return (
        <div className="button-list">
            {buttons.map((button, index) => (
                <button key={index} onClick={button.onClick} style={button.style} className="button-item">
                    {button.text}
                </button>
            ))}
        </div>
    );
}

export default ButtonList;