import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import TeacherPosting from "./Pages/TeacherPosting/TeacherPosting";

import Dashboard from "./pages/Dashboard/Dashboard";
import CoursePosting from "./Pages/CoursePosting/CoursePosting";
import BlogPosting from "./Pages/BlogPosting/BlogPosting";

// import CoursesPost from "./pages/CoursesPost";
// import Testimonial from "./pages/Testimonial";
// import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Only Layout Route */}
   
        <Route element={<Layout />}>

          <Route path="/" element={<Dashboard />} />
          <Route path="/teacher-posting" element={<TeacherPosting/>} />
          <Route path="/courses-posting" element={<CoursePosting/>}/>
          <Route path="/blog-posting" element={<BlogPosting/>}/>
          {/* <Route path="/testimonial" element={<Testimonial />} /> */}
          {/* <Route path="/blog-posting" element={<BlogPost />} /> */}

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;