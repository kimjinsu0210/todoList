import { useState } from "react";
import React from "react";

const Form = ({ todo, setTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 할일 추가 버튼 클릭
  const clickAddBtnHandler = (e) => {
    // id 고유값으로 1970년 1월 1일 부터 지금까지의 밀리초 사용
    const today = Date.now();
    e.preventDefault();
    const newTodo = {
      id: today,
      title,
      content,
      isDone: false,
    };
    const newTodoUpdate = [...todo, newTodo];
    localStorage.setItem("todo", JSON.stringify(newTodoUpdate));
    setTodo(newTodoUpdate);
    setTitle("");
    setContent("");
  };

  // Input 값 입력 시 이벤트 처리
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  return (
    //form 태그 내용(input, button)
    <main>
    <form className="form-tag">
      <div className="input-div">
        <label>제목: </label>
        <input type="text" className="input-title" value={title} onChange={titleChangeHandler} />
        <label>내용: </label>
        <input type="text" className="input-content" value={content} onChange={contentChangeHandler} />
      </div>
      <button onClick={clickAddBtnHandler}>추가하기</button>
    </form>
    </main>
  );
};
export default Form;
