import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import RobotComponent from "./components/RobotComponent/RobotComponent";
import deleteRobotThunk from "./redux/thunks/deleteRobotThunk";
import loadRobotsThunk from "./redux/thunks/loadRobotsThunk";

function App() {
  const dispatch = useDispatch();
  const robots = useSelector((state) => state.robots);

  useEffect(() => {
    dispatch(loadRobotsThunk);
  }, [dispatch]);

  const navigate = useNavigate();
  const goToPage = (id) => {
    navigate(`/robot/${id}`);
  };

  const deleteRobot = (id) => {
    dispatch(deleteRobotThunk(id));
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <ul className="nav row align-items-center justify-content-center navbar__list">
          <li className="col-4 d-flex justify-content-center nav-link navbar__icon">
            <Link to="/robots/:id">Create Robot</Link>
          </li>
        </ul>
        <div className="main row justify-content-center align-items-center">
          <div className="grid row align-items-center justify-content-center ">
            <ul className="col-8 robot-list d-flex justify-content-around">
              {robots.map((robot) => (
                <RobotComponent
                  key={robot._id}
                  robot={robot}
                  actionOnClick={deleteRobot}
                  navigateClick={() => goToPage(robot._id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/robots/:id" element={<RobotComponent />} />
      </Routes>
    </div>
  );
}

export default App;
