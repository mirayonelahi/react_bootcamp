import Todo from "./Todo";

const TodoDetails = ({ todos, toggleButton }) => {
  return (
    <div>
      <div>
        {todos
          .sort((a, b) => a.completed - b.completed)
          .map((todo) => (
            <Todo key={todo.id} todoList={todo} toggleButton={toggleButton} />
          ))}
      </div>
    </div>
  );
};
export default TodoDetails;
