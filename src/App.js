import "./App.css";

import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import deleteIcon from "./img/delete.svg";

import Card from "./components/card/Card";
import Create from "./components/create/Create";

const randomHexCode = () =>
  "#" + (Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6);

function App() {
  const [colorCards, setColorCards] = useState(
    JSON.parse(localStorage.getItem("colorCards")) || []
  );
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopyInfoClass("app__copy-info");
    }, 1500);
    return () => clearTimeout(timer);
  }, [copiedColor]);

  useEffect(() => {
    localStorage.setItem("colorCards", JSON.stringify(colorCards));
  }, [colorCards]);

  useEffect(() => {
    localStorage.setItem("colorPalettes", JSON.stringify(colorPalettes));
  }, [colorPalettes]);

  const onSubmitHandler = async (event, colorPaletteId, selectedColor) => {
    event.preventDefault();

    setColorCards((prev) => [
      ...prev,
      {
        id: uuid().slice(0, 8),
        hexCode: selectedColor,
        name: "...",
        colorPaletteId: colorPaletteId,
      },
    ]);
    changeSelectedColor(colorPaletteId, randomHexCode());
  };

  const changeSelectedColor = (id, defaultColor) => {
    setColorPalettes(
      colorPalettes.map((colorPalette) =>
        colorPalette.id === id
          ? { ...colorPalette, defaultColor: defaultColor }
          : colorPalette
      )
    );
  };

  const onCopyHandler = (hexCode) => {
    setCopyInfoClass("app__copy-info app__copy-info--active");
    setCopiedColor(hexCode);
    navigator.clipboard.writeText(hexCode);
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

  const onDeletePaletteHandler = (id, event) => {
    event.stopPropagation();
    setColorCards(
      colorCards.filter((colorCard) => colorCard.colorPaletteId !== id)
    );
    setColorPalettes(
      colorPalettes.filter((colorPalette) => colorPalette.id !== id)
    );
  };

  return (
    <div className="App">
      <h1 className="app__header">Color Saver App</h1>
      {colorPalettes.map((colorPalette) => {
        return (
          <section className="colorPalette__section" key={colorPalette.id}>
            <input
              type="text"
              className="colorPalette__header-input"
              value={colorPalette.name}
              onChange={(event) =>
                onChangePaletteNameHandler(colorPalette.id, event)
              }
            />
            <button
              className="colorPalette__delete"
              onClick={(event) =>
                onDeletePaletteHandler(colorPalette.id, event)
              }
            >
              <img
                className="colorPalette__delete__icon"
                src={deleteIcon}
                alt=""
              />
            </button>
            <ul className="card__list">
              <Create
                selectedColor={colorPalette.defaultColor}
                onChangeSelectedColor={(event) =>
                  changeSelectedColor(colorPalette.id, event.target.value)
                }
                onSubmitHandler={(event) =>
                  onSubmitHandler(
                    event,
                    colorPalette.id,
                    colorPalette.defaultColor
                  )
                }
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
                    onChangeCardHandler={(event) =>
                      onChangeCardHandler(card.id, event)
                    }
                    onDeleteCardHandler={(event) =>
                      onDeleteCardHandler(card.id, event)
                    }
                    setColorName={(colorName) =>
                      setColorName(card.id, colorName)
                    }
                    onCopyHandler={() => onCopyHandler(card.hexCode)}
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
