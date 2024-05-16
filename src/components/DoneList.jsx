import "./list.css";

export const DoneList = ({ todos, setTodos }) => {
  const removeTodo = (id) => {
    const updatedTodo = todos.filter((item) => item.id !== id);
    setTodos(updatedTodo);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isDone: !item.isDone,
        };
      } else {
        return item;
      }
    });
    setTodos(newTodos);
  };
  const doneList = todos.filter((td) => td.isDone === true); // 완료 목록
  return (
    <>
      <div className="list-container">
        <h2>Done..!☑️</h2>
        <div className="list-wrapper">
          {doneList.map((todo) => {
            return (
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
                  취소
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DoneList;
