import React, { useState } from "react";
import { UseStateContext } from "../../Context/StateContext";

const TodoForm = () => {
  const [todos, setTodos] = UseStateContext();
  const [todoName, setTodoName] = useState("");
  const handleChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodoDetail = { name: todoName, complete: false };
    const url = `http://${"localhost:5000/task"}`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodoDetail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data._id && setTodos([...todos, data]);
      });
    setTodoName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-center my-8">
        <input
          onChange={handleChange}
          type="text"
          value={todoName}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <button type="submit" className="btn btn-info ml-5">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
