import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

const StateContext = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://endgame-task.herokuapp.com/task";
      const { data } = await axios.get(url);
      setData(data);
    };
    fetchData();
  }, []);
  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};

export default StateContext;

export const UseStateContext = () => useContext(Context);