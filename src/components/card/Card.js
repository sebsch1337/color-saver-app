import "./Card.css";

const Card = ({ card }) => {
  return (
    <li className="card-box">
      <button className="card-button">{card.hexCode}</button>
    </li>
  );
};

export default Card;
