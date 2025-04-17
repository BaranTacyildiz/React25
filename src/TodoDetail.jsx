import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TodoDetail() {
  const { id } = useParams(); // URL'den id parametresini alıyoruz
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://v1.nocodeapi.com/barantacyildizdev/google_sheets/xCwSMKMyGdLHJSmG?tabId=ReactAssignment")
      .then((response) => response.json())
      .then((data) => {
        const todoItem = data.data.find((item) => item.id === id);
        setTodo(todoItem);
      })
  }, [id]);

  return (
    <div>
      {todo ?
        (<div className="icerik">
          <p>{todo.todo_name}</p>
        </div>)
        :
        (<Spin size="large">Loading...</Spin>)}
    </div>
  );
}

export default TodoDetail;
