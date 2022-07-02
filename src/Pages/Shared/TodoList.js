import React, { useState } from "react";
import { UseStateContext } from "../../Context/StateContext";

const TodoList = () => {
  const [todos, setTodos] = UseStateContext();
  const [edit, setEdit] = useState(0);
  const [editState, setEditState] = useState(false);
  const [editValue, setEditValue] = useState(todos.name);

  const checkComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].complete = !newTodos[id].complete;
    // setUpdate(newTodos[id]);
    fetch(`http://${"localhost:5000/task"}/${todos[id]._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodos[id]),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        data._id && setTodos(newTodos);
      });
  };

  const handleEdit = (id) => {
    setEdit(id);
    setEditState(true);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos[id].name = editValue;
    // setUpdate(newTodos[id]);
    fetch(`http://${"localhost:5000/task"}/${todos[id]._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodos[id]),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    setTodos(newTodos);
  };

  const handleUpdate = (id) => {
    handleEditTodos(editValue, id);
    setEditValue("");
    setEdit(0);
    setEditState(false);
  };

  const handleDelete = (id) => {
    const newTodos = [...todos];
    fetch(`http://${"localhost:5000/task"}/${todos[id]._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          newTodos.splice(id, 1);
          setTodos(newTodos);
        }
      });
  };

  return (
    <div>
      <ul className="text-center my-8 max-w-xl mx-auto space-y-5">
        {editState ? (
          <li className="alert shadow-lg">
            <div className="flex-none">
              <input
                type="text"
                value={editValue}
                name="editValue"
                onChange={(e) => setEditValue(e.target.value)}
                className="input input-bordered w-full max-w-xs"
              />
              <button
                onClick={() => handleUpdate(edit)}
                className="btn btn-sm btn-ghost"
              >
                Update
              </button>
            </div>
          </li>
        ) : (
          todos.map((todo, index) => (
            <li key={index} className="alert shadow-lg">
              <div>
                <input
                  id={index}
                  onChange={() => checkComplete(index)}
                  type="checkbox"
                  className="checkbox"
                />
                {todo.complete ? (
                  <del>{todo.name}</del>
                ) : (
                  <span>{todo.name}</span>
                )}
              </div>
              <div className="flex-none">
                {todo.complete ? (
                  ""
                ) : (
                  <button
                    onClick={() => handleEdit(index)}
                    className="btn btn-sm btn-ghost"
                  >
                    Update
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="btn btn-sm btn-primary"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
