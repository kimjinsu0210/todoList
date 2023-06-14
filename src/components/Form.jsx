import { useState } from "react";
import React from 'react';

const Form = ({todo,setTodo}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // 할일 추가 버튼 클릭
  const clickAddBtnHandler = (e) => {
    // 고유id 값으로 1970년 1월 1일 부터 지금까지의 밀리초 사용
    let today = Date.now();
    e.preventDefault();
    const newTodo = {
      id: today,
      title,
      content,
      isDone: false,
    };
    setTodo([...todo, newTodo]);
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
    <form className="form-tag">
      <div className="input-div">
        <label>제목: </label>
        <input type="text" value={title} onChange={titleChangeHandler} />
        <label>내용: </label>
        <input type="text" value={content} onChange={contentChangeHandler} />
      </div>
      <button onClick={clickAddBtnHandler}>추가하기</button>
    </form>
  );
};
export default Form;
