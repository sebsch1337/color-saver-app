import "./Card.css";
import { useEffect } from "react";

import deleteIcon from "../../img/delete.svg";

const Card = ({
  id,
  hexCode,
  name,
  onChangeCardHandler,
  onDeleteCardHandler,
  onCopyHandler,
  setColorName,
}) => {
  const colorApiURL = "https://www.thecolorapi.com/id?hex=";

  useEffect(() => {
    const timer = setTimeout(async () => {
      let colorName = "...";
      try {
        if (hexCode.length === 4 || hexCode.length === 7) {
          const response = await fetch(colorApiURL + hexCode.substring(1));
          const result = await response.json();
          colorName = result.name.value;
        }
        setColorName(colorName);
      } catch {
        setColorName("error fetching api");
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, [hexCode]);

  return (
    <li
      className="card__box"
      style={{ backgroundColor: hexCode }}
      onClick={onCopyHandler}
    >
      <button className="card__delete" onClick={onDeleteCardHandler}>
        <img className="card__delete__icon" src={deleteIcon} alt="" />
      </button>
      <span className="card__name">{name}</span>
      <input
        className="card__input"
        onClick={(event) => event.stopPropagation()}
        onChange={onChangeCardHandler}
        maxLength="7"
        value={hexCode}
      />
    </li>
  );
};

export default Card;
