import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import CardForm from "./components/CardForm";
import List from "./components/List";
import image from "./assets/image.png";

function App() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddCard = (title, content) => {
    setCards([...cards, { title, content, image }]);
  };

  const handleDeleteCard = (index) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  return (
    <div className="app space-y-8 p-8">
      <h1 className="text-3xl font-bold">Kartenverwaltung</h1>

      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <CardForm onAddCard={handleAddCard} />

      <h2 className="text-2xl font-bold">Karten</h2>
      <List cards={filteredCards} onDeleteCard={handleDeleteCard} />
    </div>
  );
}

export default App;