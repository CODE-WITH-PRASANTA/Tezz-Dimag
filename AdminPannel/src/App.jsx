import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

import Dashboard from "./pages/Dashboard/Dashboard";
// import TeacherPost from "./pages/TeacherPosting/TeacherPosting";
// import CoursesPost from "./pages/CoursesPost";
// import Testimonial from "./pages/Testimonial";
// import BlogPost from "./pages/BlogPost";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/teacher-posting" element={<TeacherPost />} />
          <Route path="/courses-posting" element={<CoursesPost />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blog-posting" element={<BlogPost />} /> */}

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;