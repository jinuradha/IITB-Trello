import "bootstrap/dist/css/bootstrap.min.css";
import "./MainContainer.css";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { showModal, editCard } from "../utils/cardSlice";
import AddCardModal from "./AddCardModal";
import ListContainer from "./ListContainer";

const MainContainer = () => {
  const dispatch = useDispatch();
  const card = useSelector((store) => store.card);
  const columnHeading = ["toDo", "doing", "done"];

  const toggleButton = () => {
    dispatch(showModal());
    dispatch(editCard())
  };

  
  return (
    <div>
      {card.modal && <AddCardModal />}
      <div className="Title">
        <label>Project Team</label>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => toggleButton()}
        >
          Add Card
        </button>
      </div>
      <div className="List">
        {columnHeading.map((i, index) => {
          return <ListContainer key={index} column={i} index={index}/>})}
      </div>
    </div>
  );
};

export default MainContainer;
