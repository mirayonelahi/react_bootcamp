import React, { useContext, useState } from "react";

const AppContext = React.createContext();

//always make sure to pass the children otherwise no data will shown

const AppProvider = ({ children }) => {
  const [todo, setTodo] = useState([]);
  const toggleButton = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <AppContext.Provider value={{ todo, setTodo, toggleButton }}>
      {children}
    </AppContext.Provider>
  );
};

//lets make a custom global context hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
