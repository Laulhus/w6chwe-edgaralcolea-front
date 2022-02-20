import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavComponent from "./components/NavComponent/NavComponent";
import RobotComponent from "./components/RobotComponent/RobotComponent";
import loadRobotsThunk from "./redux/thunks/loadRobotsThunk";

function App() {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);
  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="header">
        <NavComponent />
        <div className="main row justify-content-center align-items-center">
          <div className="grid col-12 row justify-content-center ">
            <ul className="col-8 robot-list list-unstyled d-flex justify-content-center align-items-center ">
              {robots.map((robot) => (
                <RobotComponent key={robot._id} robot={robot} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
