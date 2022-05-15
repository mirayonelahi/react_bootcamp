const Todo = ({ todoList, toggleButton, editButton, deleteButton }) => {
  return (
    <>
      <div>
        <p> {todoList.title}</p>
        <button
          onClick={() => {
            toggleButton(todoList.id);
          }}
        >
          {todoList.completed ? "✅" : "⛔️"}
        </button>
        <button
          onClick={() => {
            editButton(todoList.id);
          }}
        >
          Edit
        </button>

        <button
          onClick={() => {
            deleteButton(todoList.id);
          }}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Todo;
