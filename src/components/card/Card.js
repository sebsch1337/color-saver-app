import "./Card.css";
import deleteIcon from "../../img/delete.svg";

const Card = ({ id, hexCode, onChangeHandler, onDeleteHandler }) => {
  return (
    <li className="card__box" style={{ backgroundColor: hexCode }}>
      <button className="card__delete" onClick={() => onDeleteHandler(id)}>
        <img className="card__delete__icon" src={deleteIcon} alt="" />
      </button>
      <input
        className="card__input"
        onChange={(event) => onChangeHandler(id, event.target.value)}
        onClick={() => navigator.clipboard.writeText(hexCode)}
        value={hexCode}
      />
    </li>
  );
};

export default Card;
