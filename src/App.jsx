import React from "react";
import NavComponent from "./components/Nav/NavComponent";

function App() {
  return (
    <div className="container-fluid">
      <div className="header">
        <NavComponent />
        <div className="main row justify-content-center align-items-center">
          <div className="grid col-12 ">
            <ul className="robot-list list-unstyled">
              <li className="list-item robot-card">Test Robot</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
