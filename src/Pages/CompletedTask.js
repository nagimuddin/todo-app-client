import React from "react";
import { UseStateContext } from "../Context/StateContext";

const CompletedTask = () => {
  const [todos, setTodos] = UseStateContext();
  const completed = todos.filter((todo) => todo.complete);
  const handleDelete = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };
  return (
    <div>
      <h2>Task</h2>
    </div>
  );
};

export default CompletedTask;
