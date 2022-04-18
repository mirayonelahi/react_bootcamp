import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

// reducer function

const Index = () => {
  const defaultValue = {
    people: [],
    isModalOpen: false,
    modalContent: "",
  };

  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultValue);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_ITEM", payload: id });
  };

  return (
    <div>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit}>
        <label for="name">Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {state.people.map((dat) => {
          return (
            <div className="item">
              <li key={dat.id}>{dat.name}</li>
              <button
                onClick={() => {
                  handleDelete(dat.id);
                }}
              >
                remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
