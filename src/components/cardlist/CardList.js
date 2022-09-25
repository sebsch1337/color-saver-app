import "./CardList.css";
import Card from "../card/Card";

const CardList = ({
  cards,
  onChangeHandler,
  onDeleteHandler,
  onCopyHandler,
}) => {
  return (
    <ul className="card-list">
      {cards.length > 0 &&
        cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            hexCode={card.hexCode}
            name={card.name}
            onChangeHandler={onChangeHandler}
            onDeleteHandler={onDeleteHandler}
            onCopyHandler={onCopyHandler}
          />
        ))}
    </ul>
  );
};

export default CardList;
