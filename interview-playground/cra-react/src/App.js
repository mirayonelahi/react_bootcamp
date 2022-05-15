import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const [todoData, setTodoData] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };
  function handleToggle(e, id) {
    setTodoData((prevTodos) => {
      return prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  }

  const handleSubmit = (e) => {
    const newTodos = [
      {
        id: 15,
        title: todoInput,
        completed: false,
      },
      ...todoData,
    ];

    setTodoData(newTodos);
    setTodoInput("");
  };

  const getTodo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const slicedData = data.slice(0, 9);
    setTodoData(slicedData);
  };

  useEffect(() => {
    getTodo();
  }, []);
  const completedData = todoData.filter((todo) => todo.completed === false);
  const incompleteData = todoData.filter((todo) => todo.completed === true);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold p-8">React Assessment</h1>
      <div>
        <input
          placeholder="add todo"
          className="p-4 rounded shadow border"
          type="text"
          onChange={handleChange}
          value={todoInput}
        />
        <button onClick={handleSubmit} className="p-4 rounded border">
          Add
        </button>
      </div>
      <div className="grid grid-cols-3 gap-4 p-8">
        {completedData.map((data, idx) => (
          <div key={idx}>
            <h3>{data.title}</h3>
            <button
              onClick={(e) => {
                handleToggle(e, data.id);
              }}
            >
              {data.completed ? "Done" : "X"}
            </button>
          </div>
        ))}
        {incompleteData.map((data, idx) => (
          <div key={idx}>
            <h3>{data.title}</h3>
            <button
              onClick={(e) => {
                handleToggle(e, data.id);
              }}
            >
              {data.completed ? "Done" : "X"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
