import Todo from "./Todo";

const TodoDetails = ({ todos, toggleButton, editButton, deleteButton }) => {
  return (
    <div>
      <div>
        {todos
          .sort((a, b) => a.completed - b.completed)
          .map((todo) => (
            <Todo
              key={todo.id}
              todoList={todo}
              toggleButton={toggleButton}
              editButton={editButton}
              deleteButton={deleteButton}
            />
          ))}
      </div>
    </div>
  );
};
export default TodoDetails;
