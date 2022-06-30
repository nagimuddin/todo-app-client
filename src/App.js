import './App.css';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { Routes, Route } from "react-router-dom";
import CompletedTask from './Pages/CompletedTask';
import Todo from './Pages/Todo';
import Calender from './Pages/Calender';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/" element={<CompletedTask></CompletedTask>}></Route>
      <Route path="/" element={<Todo></Todo>}></Route>
      <Route path="/" element={<Calender></Calender>}></Route>
    </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
