import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Pages/Home/Home";

 


/* Navbar */


/* Pages */


function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Page Routes */}
      <Routes>
      
      <Route path="/" element={<Home />} />
       

      </Routes>

    </BrowserRouter>
  );
}

export default App;