export const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newItems = [...state.people, action.payload];
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "New item added",
    };
  }

  if (action.type === "DELETE_ITEM") {
    const newItems = state.people.filter((person) => {
      return person.id != action.payload;
    });
    return {
      ...state,
      people: newItems,
      isModalOpen: true,
      modalContent: "item deleted",
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }

  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
      modalContent: "",
    };
  }

  throw new Error("No matching action type");
};
