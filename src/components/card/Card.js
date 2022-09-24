import "./Card.css";

const Card = ({ card }) => {
  return (
    <li className="card-box" style={{ backgroundColor: card.hexCode }}>
      <button className="card-button">{card.hexCode}</button>
    </li>
  );
};

export default Card;
