import React from "react";

function ButtonList({ buttons }) {
  return (
    <div className="flex flex-col items-start space-y-2">
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          {button.text}
        </button>
      ))}
    </div>
  );
}

export default ButtonList;