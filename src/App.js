import './App.css';
import Footer from './Pages/Shared/Footer';
import Header from './Pages/Shared/Header';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Header></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
