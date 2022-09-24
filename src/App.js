import "./App.css";

import { useState, useEffect } from "react";

import CardList from "./components/cardlist/CardList";
import Create from "./components/create/Create";

const db = [
  {
    id: "a3k2k35",
    hexCode: "#ccc",
  },
  {
    id: "j4o3m45",
    hexCode: "#4c6ef5",
  },
  {
    id: "go43ogi",
    hexCode: "#82c91e",
  },
];

function App() {
  const [colorCards, setColorCards] = useState(db);

  return (
    <div className="App">
      <Create />
      <CardList cards={colorCards} />
    </div>
  );
}

export default App;
