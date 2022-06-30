import './App.css';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { Routes, Route } from "react-router-dom";
import CompletedTask from './Pages/CompletedTask';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/" element={<CompletedTask></CompletedTask>}></Route>
    </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
