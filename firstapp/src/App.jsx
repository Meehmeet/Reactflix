import React, { useState } from "react";
import Header from "./components/Header";
import InputField from "./components/InputField";
import ItemList from "./components/ItemList";
import ButtonList from "./components/ButtonList";
import "./App.css";

function App() {
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

    const buttons = [
        {
            text: "Hinzufügen",
            onClick: addItem,
            style: { background: "green", color: "white" },
        },
        {
            text: "Alles Löschen",
            onClick: () => setItems([]),
            style: { background: "red", color: "white" },
        },
    ];

    return (
        <div className="app">
            <Header title="Einkaufswagen" />
            <InputField
                value={input}
                onChange={setInput}
                placeholderText="Neues Produkt eingeben"
            />
            <ItemList
                items={items}
                onToggleComplete={toggleComplete}
                onDelete={deleteItem}
            />
            <ButtonList buttons={buttons} />
        </div>
    );
}

export default App;