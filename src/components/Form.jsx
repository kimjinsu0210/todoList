import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { insertTodo } from "../redux/modules/writeTodo";
import { FormInput } from "./ShareStyle";
import styled from "styled-components";

const Form = () => {
  const dispatch = useDispatch();
  const titleRef = useRef("");
  const contentRef = useRef("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  // 할일 추가 버튼 클릭
  const clickAddBtnHandler = (e) => {
    // id 고유값으로 1970년 1월 1일 부터 지금까지의 밀리초 사용
    const today = Date.now();
    e.preventDefault();
    if (title === "" || content === "") {
      if (title === "") titleRef.current.focus();
      else contentRef.current.focus();
      return alert("제목과 내용을 전부 입력해 주세요!");
    }
    const newTodo = {
      id: today,
      title,
      content,
      isDone: false,
    };
    setTitle("");
    setContent("");
    dispatch(insertTodo(newTodo));
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
      <FormTag>
        <div>
          <Label>제목: </Label>
          <InputTitle
            type="text"
            value={title}
            onChange={titleChangeHandler}
            ref={titleRef}
          />
          <Label>내용: </Label>
          <InputContent
            type="text"
            value={content}
            onChange={contentChangeHandler}
            ref={contentRef}
          />
        </div>
        <FormButton onClick={clickAddBtnHandler}>추가하기</FormButton>
      </FormTag>
    </main>
  );
};

const FormTag = styled.form`
  display: flex;
  align-items: center;
  border: none;
  padding: 30px;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #768ca3;
  color: rgb(255, 255, 255);
  box-shadow: 0px 3px 5px 0px #000000;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: bolder;
  margin: 10px;
`;
const InputTitle = styled(FormInput)`
  width: 15vw;
`;
const InputContent = styled(FormInput)`
  width: 25vw;
`;
const FormButton = styled.button`
  &:hover {
    background-color: #f092a5;
  }
  border: none;
  background-color: #d1e2ff;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  cursor: pointer;
`;
export default Form;
