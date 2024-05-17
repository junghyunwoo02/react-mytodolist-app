import Card from "../card/Card";
import "./list.css";

export const TodoDoneList = ({ todos, setTodos }) => {
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

  const todoList = todos.filter((td) => td.isDone === false); // 할 일 목록
  const doneList = todos.filter((td) => td.isDone === true); // 완료 목록

  return (
    <>
      <div className="list-container">
        <h2>Working..🔥</h2>
        <div className="list-wrapper">
          {todoList.map((todo, index) => {
            return (
              <Card
                key={index}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </div>
      </div>
      <div className="list-container">
        <h2>Done..!☑️</h2>
        <div className="list-wrapper">
          {doneList.map((todo, index) => {
            return (
              <Card
                key={index}
                todo={todo}
                removeTodo={removeTodo}
                completeTodo={completeTodo}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoDoneList;
