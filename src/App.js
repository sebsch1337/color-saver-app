import "./App.css";

import { useState } from "react";
import { v4 as uuid } from "uuid";

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
  const [selectedColor, setSelectedColor] = useState("#FFFFFF");

  // useEffect(() => {}, [colorCards]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setColorCards((prev) => [
      ...prev,
      { id: uuid().slice(0, 8), hexCode: selectedColor },
    ]);
  };

  return (
    <div className="App">
      <Create
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        onSubmitHandler={onSubmitHandler}
      />
      <CardList cards={colorCards} />
    </div>
  );
}

export default App;
