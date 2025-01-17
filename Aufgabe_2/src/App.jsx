import React, { useState } from "react";
import Card from "./components/Card";
import ButtonList from "./components/ButtonList";
import List from "./components/List";
import image from "./assets/image.png";

function App() {
  const [rows] = useState([["Coffee"], ["Tea"], ["Beer"]]);

  const cards = [
    {
      title: "John Doe",
      content: "Architect & Engineer",
      image: image,
    },
  ];

  const buttons = [
    {
      text: "Sendar",
      onClick: () => alert("Button clicked"),
    },
  ];

  return (
    <div className="app space-y-8 p-8">
      <h2 className="text-2xl font-bold">Liste</h2>
      <List rows={rows} />

      <h2 className="text-2xl font-bold">Button</h2>
      <ButtonList buttons={buttons} />

      <h2 className="text-2xl font-bold">Card</h2>
      <Card cards={cards} />
    </div>
  );
}

export default App;