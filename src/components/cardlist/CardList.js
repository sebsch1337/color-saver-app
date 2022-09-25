import "./CardList.css";
import Card from "../card/Card";

const CardList = ({ cards, onChangeHandler }) => {
  return (
    <ul className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          hexCode={card.hexCode}
          onChangeHandler={onChangeHandler}
        />
      ))}
    </ul>
  );
};

export default CardList;
