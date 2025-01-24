import React, { useState } from "react";

function CardForm({ onAddCard }) {
  const [formData, setFormData] = useState({ title: "", content: "" });

  const handleAddCard = () => {
    if (formData.title && formData.content) {
      onAddCard(formData.title, formData.content);
      setFormData({ title: "", content: "" });
    } else {
      alert("Bitte füllen Sie alle Felder aus.");
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Neue Karte erstellen</h2>
      <input
        type="text"
        placeholder="Name eingeben"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <input
        type="text"
        placeholder="Beruf eingeben"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <button
        onClick={handleAddCard}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
      >
        Karte hinzufügen
      </button>
    </div>
  );
}

export default CardForm;