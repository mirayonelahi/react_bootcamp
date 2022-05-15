import "./App.css";
import TodoDetails from "./TodoDetails";
import { useState, useEffect } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

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

  const handleSubmit = () => {
    setTodo((prevTodo) => [
      ...prevTodo,
      {
        id: todo.length + 1,
        title: input,
        completed: false,
      },
    ]);
    setInput("");
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
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        />
        <button onClick={handleSubmit}>add</button>
      </div>

      <TodoDetails todos={todo} toggleButton={toggleButton} />
    </div>
  );
}

export default App;
