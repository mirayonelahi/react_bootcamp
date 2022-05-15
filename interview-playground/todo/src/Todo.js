const Todo = ({ todoList, toggleButton }) => {
  return (
    <>
      <p>
        {todoList.title}{" "}
        <button
          onClick={() => {
            toggleButton(todoList.id);
          }}
        >
          {todoList.completed ? "✅" : "⛔️"}
        </button>
      </p>
    </>
  );
};
export default Todo;
