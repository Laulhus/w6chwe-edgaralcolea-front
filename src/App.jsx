import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import AllRobotsPage from "./pages/AllRobotsPage";
import RobotPage from "./pages/RobotPage";

function App() {
  return (
    <div className="container-fluid">
      <Link to="/robots">All robots</Link>
      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots" element={<AllRobotsPage />} />
        <Route path="/robots/:id" element={<RobotPage />} />
      </Routes>
    </div>
  );
}

export default App;
