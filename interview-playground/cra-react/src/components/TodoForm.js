import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [listTodo, setListTodo] = useState([""]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    setListTodo([...listTodo, todo]);
  };

  return (
    <>
      <div className="m-4">
        <label htmlFor="Todo">Add Todo</label>
        <input
          onChange={handleChange}
          className="shadow-lg m-2 rounded border p-2"
          value={todo}
          type="text"
        />
        <button onClick={handleSubmit} className="rounded shadow border p-2">
          Add
        </button>
      </div>
      <TodoList listTodo={listTodo} />
    </>
  );
};
export default TodoForm;
