import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Loader from "./Component/Loader/Loader";

/* Pages */
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Price from "./Pages/Price/Price";
import FloatingButtons from "./Component/FloatingButtons/FloatingButtons";
import News from "./Component/News/News";
import Topbar from "./Component/Topbar/Topbar";
import FloatingForm from "./Component/FloatingForm/FloatingForm";
import Fransice from "./Pages/Fransice/Fransice";


function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loader duration

    return () => clearTimeout(timer);
  }, []); // run only once

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <Topbar />
      <Navbar />
      <News />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/price" element={<Price />} />
        <Route path="/fransice" element={<Fransice/>}/>
       
      </Routes>

      <Footer />
      <FloatingForm/>
      <FloatingButtons />
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