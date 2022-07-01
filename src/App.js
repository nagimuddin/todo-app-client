import './App.css';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Calender from './Pages/Calender';
import Todo from './Pages/Todo';
import CompletedTask from './Pages/CompletedTask';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/todo" element={<Todo></Todo>}></Route>
      <Route path="/completed-task" element={<CompletedTask></CompletedTask>}></Route>
      <Route path="/calender" element={<Calender></Calender>}></Route>
    </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
