import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Form from "./components/Form";
import Content from "./components/Content";
function App() {
  const todoList = JSON.parse(localStorage.getItem('todo')) ?? [];
  const [todo, setTodo] = useState(todoList);
  return (
    <Layout>
      <Header />
      <Form todo={todo} setTodo={setTodo}/>
      <Content todo={todo} setTodo={setTodo} />
    </Layout>
  );
}
export default App;
