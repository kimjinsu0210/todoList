import Layout from "./Layout";
import Header from "./Header";
import Form from "./Form";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function MainPage() {
  const todoList = useSelector((state) => state.writeTodo);
  useEffect(()=>{
    localStorage.setItem("todo", JSON.stringify(todoList));
  },[todoList])

  return (
    <Layout>
      <Header />
      <Form/>
      <Todo/>
    </Layout>
  );
}
export default MainPage;
