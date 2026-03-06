import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <Router>
      <Routes>

        {/* Only Layout Route */}
        <Route path="/" element={<Layout />} />

      </Routes>
    </Router>
  );
}

export default App;