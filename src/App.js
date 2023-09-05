import { Routes, Route,  } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import Facilities from "./Pages/Facilities";
import Contactus from "./Pages/Contactus";
import Rooms from "./Pages/Rooms";

function App() {
  return (
    
    <div className="App">

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Facilities/>} path="/facilities"/>
        <Route element={<Contactus/>} path="/contactus"/>
        <Route element={<Rooms/>} path="/rooms"/>
      </Routes>

    </div>
  );
}

export default App;
