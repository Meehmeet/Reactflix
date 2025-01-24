import React from "react";

function Card({ title, content, image, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 w-full max-w-2xl border border-gray-300 rounded-md shadow-sm hover:shadow-md transition">
      <div className="flex items-center space-x-4">
        <img
          src={image}
          alt="Avatar"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600">{content}</p>
        </div>
      </div>
      <button
        onClick={onDelete}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Löschen
      </button>
    </div>
  );
}

export default Card;