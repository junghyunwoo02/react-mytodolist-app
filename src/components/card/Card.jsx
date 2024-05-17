import "./card.css";
const Card = ({ todo, removeTodo, completeTodo }) => {
  return (
    <>
      <div className="todo-container" key={todo.id}>
        <h3>{todo.title}</h3>
        <p>{todo.contents}</p>
        <button onClick={() => removeTodo(todo.id)} className="del-btn">
          삭제하기
        </button>

        <button
          onClick={() => completeTodo(todo.id)}
          className="compl-cancel-btn"
        >
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </>
  );
};
export default Card;
