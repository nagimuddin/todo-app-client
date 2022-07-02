import React from "react";
import { UseStateContext } from "../Context/StateContext";

const CompletedTask = () => {
  const [todos, setTodos] = UseStateContext();
  const completed = todos.filter((todo) => todo.complete);
  console.log(completed);

  const handleDelete = (id) => {
    const newTodos = [...todos];
    newTodos.splice(id, 1);
    setTodos(newTodos);
  };

  return (
    <section className="py-20 text-center mx-auto">
      <div className="container">
        <ul className="text-center my-8 max-w-xl mx-auto space-y-5">
          {completed.map((todo, index) => (
            <li key={index} className="alert shadow-lg">
              <div>
                <input
                  id={index}
                  type="checkbox"
                  checked
                  className="checkbox"
                />
                <del>{todo.name}</del>
              </div>
              <div className="flex-none">
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-sm btn-primary"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompletedTask;
