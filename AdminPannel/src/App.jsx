import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Layout from "./Components/Layout/Layout";
import TeacherPosting from "./Pages/TeacherPosting/TeacherPosting";

function App() {
  return (
    <Router>
      <Routes>

        {/* Only Layout Route */}
        <Route path="/" element={<Layout />} />
        <Route path="/teacher-posting" element={<TeacherPosting/>}/>

      </Routes>
    </Router>
  );
}

export default App;