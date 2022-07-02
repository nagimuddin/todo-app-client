import React from "react";

const TodoList = () => {
    
  return (
    <div>
      <ul className="text-center my-8 max-w-xl mx-auto space-y-5">
        <li className="alert shadow-lg">
          <div>
            <input type="checkbox" checked="checked" className="checkbox" />
            <span>Task: 1</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Update</button>
            <button className="btn btn-sm btn-primary">Delete</button>
          </div>
        </li>
        <li className="alert shadow-lg">
          <div>
            <input type="checkbox" checked="checked" className="checkbox" />
            <span>Task: 2</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Update</button>
            <button className="btn btn-sm btn-primary">Delete</button>
          </div>
        </li>
        <li className="alert shadow-lg">
          <div>
            <input type="checkbox" checked="checked" className="checkbox" />
            <span>Task: 3</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Update</button>
            <button className="btn btn-sm btn-primary">Delete</button>
          </div>
        </li>
        <li className="alert shadow-lg">
          <div>
            <input type="checkbox" checked="checked" className="checkbox" />
            <span>Task: 4</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Update</button>
            <button className="btn btn-sm btn-primary">Delete</button>
          </div>
        </li>
        <li className="alert shadow-lg">
          <div>
            <input type="checkbox" checked="checked" className="checkbox" />
            <span>Task: 5</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Update</button>
            <button className="btn btn-sm btn-primary">Delete</button>
          </div>
        </li>
        <li className="alert shadow-lg">
          <div>
            <input type="checkbox" checked="checked" className="checkbox" />
            <span>Task: 6</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm btn-ghost">Update</button>
            <button className="btn btn-sm btn-primary">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
