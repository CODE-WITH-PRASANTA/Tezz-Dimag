import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import TeacherPosting from "./Pages/TeacherPosting/TeacherPosting";

import Dashboard from "./pages/Dashboard/Dashboard";
import CoursePosting from "./Pages/CoursePosting/CoursePosting";
import BlogPosting from "./Pages/BlogPosting/BlogPosting";
import Testimonial from "./Pages/Testimonial/Testimonial";
import Contact from "./Pages/Contact/Contact";
import Profile from "./pages/Profile/Profile";
import AdminAdvertisement from "./Pages/AdminAdvertisement";
import AdminColdLeads from "./Pages/AdminColdLeads";
import AdmissionList from "./Pages/AdmissionList ";
import GalleryAdmin from "./Pages/GalleryAdmin";

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
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        <Route path="/admin/advertisement" element={<AdminAdvertisement />} />
        <Route path="/admin/coldlead" element={<AdminColdLeads />} />
        <Route path="/admin/admission-list" element={<AdmissionList />} />
        <Route path="/admin/gallery" element={<GalleryAdmin />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;