import logo from './logo.svg';
import './App.css';
import  { BrowserRouter,Route, Routes } from "react-router-dom"
import Navbar from './Model/Navbar';
import Home from './Model/Home';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        </Routes></BrowserRouter>
      
    </div>
  );
}

export default App;


 