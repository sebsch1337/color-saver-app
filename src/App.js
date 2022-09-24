import "./App.css";

import { useState } from "react";
import { v4 as uuid } from "uuid";

import CardList from "./components/cardlist/CardList";
import Create from "./components/create/Create";

const randomHexCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
};

const db = [
  {
    id: uuid().slice(0, 8),
    hexCode: randomHexCode(),
  },
  {
    id: uuid().slice(0, 8),
    hexCode: randomHexCode(),
  },
  {
    id: uuid().slice(0, 8),
    hexCode: randomHexCode(),
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
