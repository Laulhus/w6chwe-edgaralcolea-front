import React from "react";
import NavComponent from "./components/Nav/NavComponent";
import RobotComponent from "./components/RobotComponent/RobotComponent";

function App() {
  return (
    <div className="container-fluid">
      <div className="header">
        <NavComponent />
        <div className="main row justify-content-center align-items-center">
          <div className="grid col-12 ">
            <ul className="robot-list list-unstyled">
              <RobotComponent />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
