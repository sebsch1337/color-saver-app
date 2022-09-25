import "./Card.css";

const Card = ({ id, hexCode, onChangeHandler }) => {
  return (
    <li className="card__box" style={{ backgroundColor: hexCode }}>
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
