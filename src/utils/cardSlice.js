import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    modal: false,
    cardItems: [
      {
        title: "Groceries",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        column: "toDo",
      },
      {
        title: "Shopping",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        column: "doing",
      },
      {
        title: "Pay bills",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        column: "done",
      },
    ],
    editedItems: [],
    draggedCard: [],
  },
  reducers: {
    showModal: (state, action) => {
      state.modal = !state.modal;
    },
    addCard: (state, action) => {
      state.cardItems.push(action.payload);
    },
    editCard: (state, action) => {
      state.editedItems = action.payload;
    },
    editExistingCard: (state, action) => {
      let index = state.cardItems.findIndex(
        (i) =>
          i.title === state.editedItems.title &&
          i.description === state.editedItems.description &&
          i.column === state.editedItems.column
      );
      if(index !== -1) {
        state.cardItems.splice(index, 1);
        state.cardItems.push(action.payload);
      }
    },
    deleteCard: (state, action) => {
      let index = state.cardItems.findIndex(
        (i) =>
          i.title === state.editedItems.title &&
          i.description === state.editedItems.description &&
          i.column === state.editedItems.column
      );
      index !== -1 && state.cardItems.splice(index, 1);
    },
    onDragCard: (state, action) => {
      let index = state.cardItems.findIndex(
        (i) =>
          i.title === state.draggedCard.title &&
          i.description === state.draggedCard.description &&
          i.column === state.draggedCard.column
      );
      if (state.draggedCard.length === 0) {
        state.draggedCard = action.payload;
      }
      index !== -1 && state.cardItems.splice(index, 1);
    },
    onDropCard: (state, action) => {
      state.cardItems.push(action.payload);
    },
    removeDraggedCard: (state, action) => {
      state.draggedCard = [];
    },
  },
});

export const {
  showModal,
  addCard,
  editCard,
  editExistingCard,
  deleteCard,
  onDragCard,
  onDropCard,
  removeDraggedCard,
} = cardSlice.actions;

export default cardSlice.reducer;
