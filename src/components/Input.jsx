import { useState } from "react";
import "./input.css";

export const Input = ({ todos, setTodos }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    // TODO: 제목과 내용이 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료
    if (!title || !contents) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    const newTodo = {
      id: Date.now(),
      title: title,
      contents: contents,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle(""); // 입력 필드 초기화
    setContents("");
  };

  return (
    <div>
      <form onSubmit={addTodo} className="form-container">
        <div className="input-container">
          <label>제목</label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label>내용</label>
          <input
            value={contents}
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
        </div>
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default Input;
