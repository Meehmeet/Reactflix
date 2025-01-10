import { useState } from 'react'
import "./Button.css"

function Button() {
    const [items, setItems] = useState([]);
    const [input, setInput] = useState("");

    const addItem = () => {
        if (input.trim()) {
            setItems([...items, { text: input, completed: false }]);
            setInput("");
        }
    };

    const toggleComplete = (index) => {
        setItems(
            items.map((item, i) =>
                i === index ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const deleteItem = (index) => {
        setItems(items.filter((_, i) => i !== index));
    };

    return (
        <div className="app">
            <h1>Einkaufsliste</h1>
            <div className="input-container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Füge dein Produkt ein" />
                <button onClick={addItem}>Hinzufügen</button>
            </div>
            <ul className="item-list">
                {items.map((item, index) => (
                    <li key={index} className={`item ${item.completed ? "completed" : ""}`}>
                        <input type="checkbox" checked={item.completed} onChange={() => toggleComplete(index)} />
                        <span>{item.text}</span>
                        <button onClick={() => deleteItem(index)}>Löschen</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Button;