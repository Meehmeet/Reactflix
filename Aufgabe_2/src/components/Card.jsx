import React from "react";

function Card({ cards }) {
    return (
        <div className="flex flex-col items-start space-y-4">
            {cards.map((card, index) => (
                <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-6 w-64">
                    <img src={card.image} alt="Avatar" className="w-full h-48 rounded-t-lg object-cover mb-4" />
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-gray-600">{card.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Card;