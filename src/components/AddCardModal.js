import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showModal, addCard, editExistingCard, deleteCard } from "../utils/cardSlice";
import { useEffect, useState } from "react";
import checkValidate from "../utils/validate"

const AddCardModal = () => {
  const dispatch = useDispatch();
  const card = useSelector((store) => store.card);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [column, setColumn] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = () => dispatch(showModal());

  const handleSave = () => {
    const message = checkValidate(title, description)
    setMessage(message);

    if(message) return;

    const cardDetails = {
      title: title,
      description: description,
      column: column,
    };

    const cardAlreadyPresent =
      card.editedItems &&
      card.cardItems.filter(
        (i) =>
          i.title === card.editedItems.title &&
          i.description === card.editedItems.description &&
          i.column === card.editedItems.column
      ).length > 0
        ? true
        : false;

    if (cardAlreadyPresent) {
      dispatch(editExistingCard(cardDetails));
    } else {
      dispatch(addCard(cardDetails));
    }
    handleClose();
  };

  const handleDelete = () => {
    dispatch(deleteCard());
    handleClose();
  }

  useEffect(() => {
    setTitle(card.editedItems && card.editedItems.title);
    setDescription(card.editedItems && card.editedItems.description);
    setColumn(card.editedItems && card.editedItems.column);
    if(title || description) {
      const message = checkValidate(title, description)
      setMessage(message);
    }
  }, [card.editedItems]);

  console.log("title", title)
    console.log("description", description)

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal show={card.modal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter the task name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter the description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Column</Form.Label>
              <Form.Select
                value={column}
                onChange={(e) => setColumn(e.target.value)}
              >
                <option>Select a column</option>
                <option value="toDo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </Form.Select>
            </Form.Group>
          </Form>
          <div className="message">{message}</div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={handleDelete}>
            Delete Card
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCardModal;
