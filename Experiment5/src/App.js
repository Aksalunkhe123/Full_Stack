import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Students from "./Students";
import StudentDetail from "./StudentDetails";
function App() {
 return (
 <Router>
 <nav>
 <Link to="/">Home</Link> |{" "}
 <Link to="/about">About</Link> |{" "}
 <Link to="/students">Students</Link>
 </nav>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/students" element={<Students />} />
 <Route path="/students/:id" element={<StudentDetail />} />
 </Routes>
 </Router>
 );
}
export default App;