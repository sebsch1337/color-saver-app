import "./Card.css";
import deleteIcon from "../../img/delete.svg";

const Card = ({ id, hexCode, onChangeHandler, onDeleteHandler }) => {
  return (
    <li
      className="card__box"
      style={{ backgroundColor: hexCode }}
      onClick={() => navigator.clipboard.writeText(hexCode)}
    >
      <button
        className="card__delete"
        onClick={(event) => onDeleteHandler(id, event)}
      >
        <img className="card__delete__icon" src={deleteIcon} alt="" />
      </button>
      <input
        className="card__input"
        onChange={(event) => onChangeHandler(id, event)}
        value={hexCode}
      />
    </li>
  );
};

export default Card;
