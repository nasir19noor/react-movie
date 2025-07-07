import './App.css'
import Home from "./pages/Home"
import Favorite from './pages/Favorite';
import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  const movieNumber = 1;
  return (
    <div>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorite />}/>
      </Routes>
    </main> 
    </div>
  );
}


export default App
