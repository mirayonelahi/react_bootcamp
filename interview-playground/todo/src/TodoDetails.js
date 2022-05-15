import Todo from "./Todo";

const TodoDetails = ({ todos, editButton, deleteButton }) => {
  return (
    <div>
      <div>
        {todos
          .sort((a, b) => a.completed - b.completed)
          .map((todo) => (
            <Todo
              key={todo.id}
              todoList={todo}
              editButton={editButton}
              deleteButton={deleteButton}
            />
          ))}
      </div>
    </div>
  );
};
export default TodoDetails;
