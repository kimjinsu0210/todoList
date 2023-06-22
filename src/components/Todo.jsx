import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, booleanChange } from "../redux/modules/writeTodo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TodoBoxButton } from "./ShareStyle";

function Todo() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.writeTodo);

  // 삭제 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      dispatch(deleteTodo(id));
    }
  };

  // isDone(true <-> false) changer
  const clickBooleanChanger = (id) => {
    dispatch(booleanChange(id));
  };

  return (
    <footer>
      <div className="content-box">
        <h2>Working..📌</h2>
        <TodoList>
          {todoList.map((item) => {
            return item.isDone === true ? (
              ""
            ) : (
              <TodoBox key={item.id}>
                <DetailButton
                  onClick={() => {
                    navigate("/detail", {
                      state: {
                        id: item.id,
                        title: item.title,
                        content: item.content,
                      },
                    });
                  }}
                >
                  <DetailImg src="/detail-icon.png" alt="" />
                </DetailButton>
                <TodoTitle>{item.title}</TodoTitle>
                <TodoContent>{item.content}</TodoContent>
                <BoxDeleteButton
                  onClick={() => clickRemoveButtonHandler(item.id)}
                >
                  삭제하기
                </BoxDeleteButton>
                <BooleanChangeButton
                  onClick={() => clickBooleanChanger(item.id)}
                >
                  완료
                </BooleanChangeButton>
              </TodoBox>
            );
          })}
        </TodoList>
        <h2>Done..🎊</h2>
        <TodoList>
          {todoList.map((item) => {
            return item.isDone === false ? (
              ""
            ) : (
              <TodoBox key={item.id}>
                <DetailButton
                  onClick={() => {
                    navigate("/detail", {
                      state: {
                        id: item.id,
                        title: item.title,
                        content: item.content,
                      },
                    });
                  }}
                >
                  <DetailImg src="/detail-icon.png" alt="" />
                </DetailButton>
                <TodoTitle>{item.title}</TodoTitle>
                <TodoContent>{item.content}</TodoContent>
                <BoxDeleteButton
                  onClick={() => clickRemoveButtonHandler(item.id)}
                >
                  삭제하기
                </BoxDeleteButton>
                <BooleanChangeButton
                  onClick={() => clickBooleanChanger(item.id)}
                >
                  취소
                </BooleanChangeButton>
              </TodoBox>
            );
          })}
        </TodoList>
      </div>
    </footer>
  );
}

const TodoList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TodoBox = styled.div`
  background-color: #a5cbf0;
  width: 20%;
  height: 250px;
  border-radius: 10px;
  margin: 20px 40px 50px 0px;
  padding: 10px;
  color: rgb(66, 66, 66);
  box-shadow: 0px 3px 5px 0px #000000;
  word-break: break-all;
`;
const BoxDeleteButton = styled(TodoBoxButton)`
  &:hover {
    background-color: rgb(255, 80, 80);
  }
  background-color: #f7b8c5;
`;
const BooleanChangeButton = styled(TodoBoxButton)`
  &:hover {
    background-color: rgb(150, 255, 150);
  }
  background-color: #ceddf2;
`;
const DetailButton = styled.button`
  border: none;
  box-shadow: none !important;
  float: right;
  background-color: transparent;
`;
const DetailImg = styled.img`
  width: 40px;
  height: 40px;
  background-size: cover;
  cursor: pointer;
  background-color: transparent;
`;
const TodoTitle = styled.h2`
  overflow: hidden;
  height: 58px;
`;
const TodoContent = styled.p`
  overflow: hidden;
  height: 66px;
`;
export default Todo;
