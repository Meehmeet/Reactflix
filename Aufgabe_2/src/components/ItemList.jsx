import React from "react";

function ItemList({ items, onToggleComplete, onDelete }) {
    return (
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`flex items-center space-x-4 p-2 border rounded-md ${item.completed ? "bg-green-100" : "bg-gray-100"
                        }`}
                >
                    <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => onToggleComplete(index)}
                        className="form-checkbox h-5 w-5 text-green-600"
                    />
                    <span className={item.completed ? "line-through text-gray-500" : ""}>{item.text}</span>
                    <button
                        onClick={() => onDelete(index)}
                        className="text-red-500 hover:text-red-700"
                    >
                        Löschen
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ItemList;