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
  const [selectedColor, setSelectedColor] = useState(randomHexCode());
  const [copyInfoClass, setCopyInfoClass] = useState("app__copy-info");
  const [copiedColor, setCopiedColor] = useState("");

  // useEffect(() => {}, [colorCards]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setColorCards((prev) => [
      ...prev,
      { id: uuid().slice(0, 8), hexCode: selectedColor },
    ]);
    setSelectedColor(randomHexCode());
  };

  const onCopyHandler = (hexCode) => {
    setCopiedColor(hexCode);
    setCopyInfoClass("app__copy-info app__copy-info--active");
    navigator.clipboard.writeText(hexCode);
    setTimeout(() => {
      setCopyInfoClass("app__copy-info");
    }, 1500);
  };

  const onChangeHandler = (id, event) => {
    setColorCards(
      colorCards.map((colorCard) =>
        colorCard.id === id
          ? { ...colorCard, hexCode: event.target.value }
          : colorCard
      )
    );
  };

  const onDeleteHandler = (id, event) => {
    event.stopPropagation();
    setColorCards((prevCards) =>
      prevCards.filter((colorCard) => colorCard.id !== id)
    );
  };

  return (
    <div className="App">
      <Create
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        onSubmitHandler={onSubmitHandler}
      />
      <CardList
        cards={colorCards}
        onChangeHandler={onChangeHandler}
        onDeleteHandler={onDeleteHandler}
        onCopyHandler={onCopyHandler}
      />
      <span style={{ backgroundColor: copiedColor }} className={copyInfoClass}>
        Colorcode copied!
      </span>
    </div>
  );
}

export default App;
