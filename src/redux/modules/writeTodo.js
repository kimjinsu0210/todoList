// action value
const INSERT_TODO = "writeTodo/INSERT_TODO";
const DELETE_TODO = "writeTodo/DELETE_TODO";
const CHANGE_BOOLEAN = "writeTodo/CHANGE_BOOLEAN";

// action creator : action value를 return하는 함수
export const insertTodo = (payload) => {
  return {
    type: INSERT_TODO,
    payload: payload,
  };
};
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};
export const booleanChange = (payload) => {
  return {
    type: CHANGE_BOOLEAN,
    payload: payload,
  };
};
// 초기 상태값(state)
const todoList = JSON.parse(localStorage.getItem("todo")) ?? [];
const initialState = todoList;

// 리듀서
const writeTodo = (state = initialState, action) => {
  switch (action.type) {
    case INSERT_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload);
    case CHANGE_BOOLEAN:
    return state.map((item) =>  item.id === action.payload ? { ...item, isDone: !item.isDone } : item);
    default:
      return state;
  }
};
export default writeTodo;
