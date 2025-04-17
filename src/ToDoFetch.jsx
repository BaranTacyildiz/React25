import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Input } from "antd";

const ToDoFetch = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

 
  useEffect(() => {
    fetch("https://v1.nocodeapi.com/barantacyildizdev/google_sheets/xCwSMKMyGdLHJSmG?tabId=ReactAssignment")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data.data);
      });
  }, []);


  const inputViewer = (e) =>{
    setSearch(e)
  }

  const filteredTodos = todos.filter((todo) => todo.todo_name.includes(search));

  return (
    <div className="icerik">
      <Input placeholder="Ara..." onChange={inputViewer}></Input>
      {filteredTodos.map((todo) => (
        <Link to={"/todo/${todo.id}"} style={{ textDecoration: 'none' }} key={todo.id}>
          <Card style={{ marginTop: "20px" }}>
            {todo.todo_name}
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default ToDoFetch;