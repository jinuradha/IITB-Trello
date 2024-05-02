import { useDispatch } from "react-redux";
import { showModal, editCard, onDragCard } from "../utils/cardSlice";
import "./Card.css";

const Card = ({ cardDetail, column }) => {
  const dispatch = useDispatch();

  const onEditCard = () => {
    const cardDetails = {
      title: cardDetail.title,
      description: cardDetail.description,
      column: column
    }
    dispatch(showModal())
    dispatch(editCard(cardDetails))
  }

  const onDrag = (event, i) => {
    event.preventDefault();
    dispatch(onDragCard(i))
  }
  
  return (
    <div className="Card" key={cardDetail} onClick={() => onEditCard()} draggable onDrag={(event) => onDrag(event, cardDetail,column)}>
      <span className="OuterCard">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{cardDetail.title}</h5>
            <p className="card-text">{cardDetail.description}</p>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Card;
