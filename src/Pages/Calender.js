import { format } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const Calender = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className="container">
        <div className="row grid justify-items-center">
            <h2 className="text-4xl font-bold text-accent-focus">Please select a date</h2>
            <div className="text-xl">
            <DayPicker 
             mode="single"
             selected={date}
             onSelect={setDate}
            />
            </div>
            <p className="text-2xl font-bold text-info-content">Your Selected Date: {format(date, 'PP')}</p>
        </div>
      </div>
  );
};

export default Calender;
