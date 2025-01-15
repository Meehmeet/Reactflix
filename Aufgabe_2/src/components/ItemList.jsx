import React from "react";

function ItemList({ items, onToggleComplete, onDelete }) {
    return (
        <ul className="item-list">
            {items.map((item, index) => (
                <li key={index} className={`item ${item.completed ? "completed" : ""}`}>
                    <input type="checkbox" checked={item.completed} onChange={() => onToggleComplete(index)} />
                    <span>{item.text}</span>
                    <button onClick={() => onDelete(index)}>Löschen</button>
                </li>
            ))}
        </ul>
    );
}

export default ItemList;