import "./App.css";

import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import Card from "./components/card/Card";
import Create from "./components/create/Create";

const randomHexCode = () =>
  "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

function App() {
  const [colorCards, setColorCards] = useState(
    JSON.parse(localStorage.getItem("colorCards")) || []
  );
  //const [selectedColor, setSelectedColor] = useState([]);
  const [copyInfoClass, setCopyInfoClass] = useState("app__copy-info");
  const [copiedColor, setCopiedColor] = useState("");
  const [colorPalettes, setColorPalettes] = useState(
    JSON.parse(localStorage.getItem("colorPalettes")) || [
      {
        id: uuid().slice(0, 8),
        name: "New Color Palette",
        defaultColor: randomHexCode(),
      },
    ]
  );

  const colorApiURL = "https://www.thecolorapi.com/id?hex=";

  useEffect(() => {
    localStorage.setItem("colorCards", JSON.stringify(colorCards));
  }, [colorCards]);

  useEffect(() => {
    localStorage.setItem("colorPalettes", JSON.stringify(colorPalettes));
  }, [colorPalettes]);

  const onSubmitHandler = async (event, colorPaletteId, selectedColor) => {
    event.preventDefault();
    const response = await fetch(colorApiURL + selectedColor.substring(1));
    const result = await response.json();
    const colorName = result.name.value;

    setColorCards((prev) => [
      ...prev,
      {
        id: uuid().slice(0, 8),
        hexCode: selectedColor,
        name: colorName,
        colorPaletteId: colorPaletteId,
      },
    ]);
    onChangeSelectedColor(colorPaletteId, randomHexCode());
  };

  const onChangeSelectedColor = (id, defaultColor) => {
    setColorPalettes(
      colorPalettes.map((colorPalette) =>
        colorPalette.id === id
          ? { ...colorPalette, defaultColor: defaultColor }
          : colorPalette
      )
    );
  };

  const onCopyHandler = (hexCode) => {
    setCopiedColor(hexCode);
    setCopyInfoClass("app__copy-info app__copy-info--active");
    navigator.clipboard.writeText(hexCode);
    setTimeout(() => {
      setCopyInfoClass("app__copy-info");
    }, 1500);
  };

  const setColorName = (id, colorName) => {
    setColorCards(
      colorCards.map((colorCard) =>
        colorCard.id === id ? { ...colorCard, name: colorName } : colorCard
      )
    );
  };

  const onChangeCardHandler = async (id, event) => {
    console.log(id);
    const newHexCode = event.target.value;

    setColorCards(
      colorCards.map((colorCard) =>
        colorCard.id === id ? { ...colorCard, hexCode: newHexCode } : colorCard
      )
    );
  };

  const onChangePaletteNameHandler = (id, event) => {
    setColorPalettes(
      colorPalettes.map((colorPalette) =>
        colorPalette.id === id
          ? { ...colorPalette, name: event.target.value }
          : colorPalette
      )
    );
  };

  const onDeleteCardHandler = (id, event) => {
    event.stopPropagation();
    setColorCards((prevCards) =>
      prevCards.filter((colorCard) => colorCard.id !== id)
    );
  };

  const onClickNewPalette = () => {
    setColorPalettes((prev) => [
      ...prev,
      {
        id: uuid().slice(0, 8),
        name: "New Color Palette",
        defaultColor: randomHexCode(),
      },
    ]);
  };

  return (
    <div className="App">
      <h1 className="app__header">Color Saver App</h1>
      {colorPalettes.map((colorPalette) => {
        return (
          <section key={colorPalette.id}>
            <input
              type="text"
              className="colorPalette__header-input"
              value={colorPalette.name}
              onChange={(event) =>
                onChangePaletteNameHandler(colorPalette.id, event)
              }
            />
            <ul className="card__list">
              <Create
                selectedColor={colorPalette.defaultColor}
                onChangeSelectedColor={(defaultColor) =>
                  onChangeSelectedColor(colorPalette.id, defaultColor)
                }
                onSubmitHandler={onSubmitHandler}
                colorPaletteId={colorPalette.id}
              />
              {colorCards
                .filter(
                  (colorCard) => colorCard.colorPaletteId === colorPalette.id
                )
                .map((card) => (
                  <Card
                    key={card.id}
                    id={card.id}
                    hexCode={card.hexCode}
                    name={card.name}
                    onChangeCardHandler={onChangeCardHandler}
                    onDeleteCardHandler={(event) =>
                      onDeleteCardHandler(card.id, event)
                    }
                    setColorName={(colorName) =>
                      setColorName(card.id, colorName)
                    }
                    onCopyHandler={onCopyHandler}
                  />
                ))}
            </ul>
            <hr className="colorPalette_line" />
          </section>
        );
      })}
      <button onClick={onClickNewPalette} className="colorPalette__add-button">
        ADD PALETTE
      </button>
      <span style={{ backgroundColor: copiedColor }} className={copyInfoClass}>
        Colorcode copied!
      </span>
    </div>
  );
}

export default App;
