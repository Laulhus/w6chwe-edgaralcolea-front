import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import AllRobotsPage from "./pages/AllRobotsPage";
import CreateRobotPage from "./pages/CreateRobotPage";

function App() {
  return (
    <div className="container-fluid">
      <div className="navbar">
        <Link to="/robots">All robots</Link>
        <Link to="/create">Create Robot</Link>
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots" element={<AllRobotsPage />} />
        <Route path="/create" element={<CreateRobotPage />} />
      </Routes>
    </div>
  );
}

export default App;
