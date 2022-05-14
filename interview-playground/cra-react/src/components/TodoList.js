const TodoList = ({ listTodo }) => {
  return (
    <div className="m-8">
      <div>Todolist goes here</div>
      {listTodo.map((l) => (
        <>
          <p>{l}</p>
          <button>x</button>
        </>
      ))}
    </div>
  );
};
export default TodoList;
