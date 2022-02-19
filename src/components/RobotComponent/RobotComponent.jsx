import React from "react";
import StyledRobot from "./RobotComponent.style";

function RobotComponent({
  robot: { name, img, speed, endurance, creationDate },
}) {
  return (
    <StyledRobot>
      <img src={img} alt="Test" />
      <ul>
        <li className="name-text">{name}</li>
        <li className="speed-text">{`Speed: ${speed}`}</li>
        <li className="endurance-text">{`Endurance: ${endurance}`}</li>
        <li className="date-text">{`Creation: ${creationDate}`}</li>
      </ul>
    </StyledRobot>
  );
}
export default RobotComponent;
