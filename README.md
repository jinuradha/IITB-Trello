# Documentation File for Trello Project

1. "App.js" contains "Header" component and "MainContainer" component
     - Header contains icons and logo (static)
     - MainContainer contains 3 columns, modal and "Add Card" button

2. Inside "MainContainer":
     - when "Add Card" button is clicked "showModal" variable is toggled to true
       and "AddCardModal" component is conditionally rendered.
     - the 3 columns are rendered through "ListContainer" component.
     - for displaying the cards, "cardItems" array is declared using state variable.
     - "cardItems" array consists of objects like: {title: "Groceries", description: "Some Description", column: "toDo"} 

3. Modal pop-up:
     - Bootstrap Modal and Form are used to show form inside modal.
     - Modal Footer consists of "Delete Card" and "Save" to delete and save the card respectively.
     - on clicking "Save" button, form is validated and "addCard" action is dispatched which pushes the card inside cards array.
     - on clicking "Delete  Card" button, "deleteCard" action is dispatch which deletes the card from cards array. 
     - for closing the modal, "showModal" is set to false.

4. Edit Card:
     - when the card is clicked, "showModal" is toggled.
     - the pre-filled data is displayed using state variable and on changing the data setState is called.
     - after "Save" button is clicked, "editExistingCard" action is dispatched to replace the old array element with new one.
     - with the help of useEffect, on component update the component's state is set and the form is also validated for edited card.

5. Drag and Drop:
    - for drag and drop, html5 properties like draggable, onDrag, onDragOver, and onDrop is used.
    - onDrag, the "onDragCard" action is dispatched which deletes the previous array element and its new column is saved in state.
    - onDrop, the "onDropCard" action is dispatched which pushes the card with changed column in "cardItems" array.


# Libraries used for project:
  - Redux for state management
  - Bootstrap for using in-build styled Components
  - Firebase for deploying the project.