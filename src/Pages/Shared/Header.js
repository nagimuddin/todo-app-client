import React from "react";

const Header = () => {
  return (
    <>
      <div class="navbar bg-primary">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 text-slate-700"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Todo</a>
              </li>
              <li>
                <a>Completed Task</a>
              </li>
              <li>
                <a>Calender</a>
              </li>
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-white text-xl">Todo</a>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal p-0 text-white">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Todo</a>
            </li>
            <li>
              <a>Completed Task</a>
            </li>
            <li>
              <a>Calender</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
