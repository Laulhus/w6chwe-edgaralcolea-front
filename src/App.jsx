import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavComponent from "./components/Nav/NavComponent";
import RobotComponent from "./components/RobotComponent/RobotComponent";
import loadRobotsThunk from "./redux/thunks/loadRobotsThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="header">
        <NavComponent />
        <div className="main row justify-content-center align-items-center">
          <div className="grid col-12 row justify-content-center ">
            <ul className="col-8 robot-list list-unstyled">
              <RobotComponent />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
