import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Home from "./Pages/Home/Home";


import BlogDetails from "./Pages/BlogDetails/BlogDetails";
import Price from "./Pages/Price/Price";
import Blog from "./Pages/Blog/Blog";

 


/* Navbar */


/* Pages */


function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<BlogDetails/>}/>
        <Route path="/price" element={<Price/>}/>
        
      
       

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;