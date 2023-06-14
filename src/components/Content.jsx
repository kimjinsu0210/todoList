import React from "react";

function Content({ todo, setTodo }) {
  // 삭제 버튼 클릭
  const clickRemoveButtonHandler = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  // isDone(true <-> false) changer
  const clickBooleanChanger = (id) => {
    const todoArr = todo.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setTodo(todoArr);
  };
  return (
    // isDone 조건에 따른 todoList 작성문
    <div className="content-box">
      <h2>Working..📌</h2>
      <div className="todo-list">
        {todo.map((item) => {
          if (item.isDone === false) {
            return (
              <div key={item.id} className="todo-working">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <button
                  className="delBtn"
                  onClick={() => clickRemoveButtonHandler(item.id)}
                >
                  삭제하기
                </button>
                <button
                  className="booleanChangeBtn"
                  onClick={() => clickBooleanChanger(item.id)}
                >
                  완료
                </button>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
      <h2>Done..🎊</h2>
      <div className="todo-list">
        {todo.map((item) => {
          if (item.isDone === true) {
            return (
              <div key={item.id} className="todo-working">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <button
                  className="delBtn"
                  onClick={() => clickRemoveButtonHandler(item.id)}
                >
                  삭제하기
                </button>
                <button
                  className="booleanChangeBtn"
                  onClick={() => clickBooleanChanger(item.id)}
                >
                  취소
                </button>
              </div>
            );
          } else {
            return false;
          }
        })}
      </div>
    </div>
  );
}

export default Content;
