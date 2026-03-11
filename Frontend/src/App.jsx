import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Loader from "./Component/Loader/Loader";

import Home from "./Pages/Home/Home";

function AppContent() {

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);

  }, [location]);

  return (
    <>
      {loading && <Loader />}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;