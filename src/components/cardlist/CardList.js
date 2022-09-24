import "./CardList.css";
import Card from "../card/Card";

const CardList = ({ cards }) => {
  return (
    <ul className="card-list">
      {cards.map((card) => (
        <Card key={card.id} hexCode={card.hexCode} />
      ))}
    </ul>
  );
};

export default CardList;
