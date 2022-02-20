import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import NavComponent from "./components/NavComponent/NavComponent";
import RobotComponent from "./components/RobotComponent/RobotComponent";
import deleteRobotThunk from "./redux/thunks/deleteRobotThunk";
import loadRobotsThunk from "./redux/thunks/loadRobotsThunk";

function App() {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);
  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const deleteRobot = (id) => {
    dispatch(deleteRobotThunk(id));
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <NavComponent />
        <div className="main row justify-content-center align-items-center">
          <div className="grid row align-items-center justify-content-center ">
            <ul className="col-8 robot-list d-flex justify-content-around">
              {robots.map((robot) => (
                <RobotComponent
                  key={robot._id}
                  robot={robot}
                  actionOnClick={deleteRobot}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
