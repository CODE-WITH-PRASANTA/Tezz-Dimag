import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";

/* Pages */
import Home from "./Pages/Home/Home";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <Routes>

        <Route path="/" element={<Home />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;