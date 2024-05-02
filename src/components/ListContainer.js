import { useDispatch, useSelector } from "react-redux";
import { onDropCard, removeDraggedCard } from "../utils/cardSlice";
import Card from "./Card";

const ListContainer = ({column, index}) => {
  const dispatch = useDispatch();
  const card = useSelector((store) => store.card);
  const heading = column === "toDo" ? "To Do" : column === "doing" ? "Doing" : "Done";

  const onDrop = (event, i) => {
    const cardMoved = {
      title: card.draggedCard.title,
      description: card.draggedCard.description,
      column: i
    }
    dispatch(onDropCard(cardMoved))
    dispatch(removeDraggedCard())
  }

  const onDragOver = (event, i) => {
    event.preventDefault();
  }

  return (
    <div
      className="ListContainer"
      onDrop={(event) => onDrop(event, column)}
      onDragOver={(event) => onDragOver(event)}
    >
      <label>{heading}</label>
      {card.cardItems.map((i, xyz) => {
        if (i.column === column)
          return <Card key={xyz} cardDetail={i} column={i.column} />;
        else return <></>;
      })}
    </div>
  );
};

export default ListContainer;
