import "./Card.css";
import deleteIcon from "../../img/delete.svg";

const Card = ({
  id,
  hexCode,
  name,
  onChangeCardHandler,
  onDeleteCardHandler,
  onCopyHandler,
}) => {
  return (
    <li
      className="card__box"
      style={{ backgroundColor: hexCode }}
      onClick={() => onCopyHandler(hexCode)}
    >
      <button
        className="card__delete"
        onClick={(event) => onDeleteCardHandler(id, event)}
      >
        <img className="card__delete__icon" src={deleteIcon} alt="" />
      </button>
      <span className="card__name">{name}</span>
      <input
        className="card__input"
        onClick={(event) => event.stopPropagation()}
        onChange={(event) => onChangeCardHandler(id, event)}
        value={hexCode}
      />
    </li>
  );
};

export default Card;
