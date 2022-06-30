import React from 'react';
import Calender from './Calender';
import Todo from './Todo';

const Home = () => {
    return (
        <div>
            <Todo></Todo>
            <Calender></Calender>
        </div>
    );
};

export default Home;