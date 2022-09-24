import "./CardList.css";
import Card from "../card/Card";

const CardList = ({ cards }) => {
  return (
    <ul className="card-list">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </ul>
  );
};

export default CardList;
