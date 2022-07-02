import React from "react";
import TodoForm from "./Shared/TodoForm";
import TodoList from "./Shared/TodoList";

const Todo = () => {

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-900 text-center">
        My Todo List 2022
      </h1>
      <TodoForm></TodoForm>
      <TodoList></TodoList>
    </div>
  );
};

export default Todo;
