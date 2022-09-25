import "./CardList.css";
import Card from "../card/Card";

const CardList = ({ cards, onChangeHandler, onDeleteHandler }) => {
  return (
    <ul className="card-list">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          hexCode={card.hexCode}
          onChangeHandler={onChangeHandler}
          onDeleteHandler={onDeleteHandler}
        />
      ))}
    </ul>
  );
};

export default CardList;
