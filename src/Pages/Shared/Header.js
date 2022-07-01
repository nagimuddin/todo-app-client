import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-primary">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-slate-700"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/completed-task">Completed Task</Link>
              </li>
              <li>
                <Link to="/calender">Calender</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-white text-xl">Todo List</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">
          <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/todo">Todo</Link>
              </li>
              <li>
                <Link to="/completed-task">Completed Task</Link>
              </li>
              <li>
                <Link to="/calender">Calender</Link>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
