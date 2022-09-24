import "./Card.css";

const Card = ({ hexCode }) => {
  return (
    <li className="card-box" style={{ backgroundColor: hexCode }}>
      <button
        className="card-button"
        name="cardbutton"
        onClick={(event) => navigator.clipboard.writeText(hexCode)}
      >
        {hexCode}
      </button>
    </li>
  );
};

export default Card;
