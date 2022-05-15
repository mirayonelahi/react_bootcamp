import "./App.css";
import TodoDetails from "./TodoDetails";
import { useState, useEffect, useRef } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const refContainer = useRef(null);

  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState({ isEdit: false, editId: "" });

  const getTodo = async () => {
    const data = await fetch(url);
    const response = await data.json();
    const slicedResult = response.slice(0, 9);
    setTodo(slicedResult);
  };

  const toggleButton = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteButton = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const editButton = (id) => {
    refContainer.current.focus();
    const findItem = todo.find((singleTodo) => singleTodo.id === id);
    setInput(findItem.title);
    setIsEdit({ isEdit: true, editId: id });
  };

  const handleSubmit = () => {
    if (isEdit.isEdit) {
      setTodo((prevTodo) =>
        prevTodo.map((todo) =>
          todo.id === isEdit.editId ? { ...todo, title: input } : todo
        )
      );
      setIsEdit({ isEdit: false, id: "" });
      setInput("");
    } else {
      setTodo((prevTodo) => [
        ...prevTodo,
        {
          id: todo.length + 1,
          title: input,
          completed: false,
        },
      ]);
      setInput("");
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="App">
      <p>react assessment</p>

      <div>
        <input
          type="text"
          ref={refContainer}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button onClick={handleSubmit}>add</button>
      </div>

      <TodoDetails
        todos={todo}
        toggleButton={toggleButton}
        editButton={editButton}
        deleteButton={deleteButton}
      />
    </div>
  );
}

export default App;
