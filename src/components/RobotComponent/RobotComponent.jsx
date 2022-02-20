import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
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
      <FontAwesomeSvgIcon className={"icon"} icon={faTrashCan} size={"2x"} />
    </StyledRobot>
  );
}
export default RobotComponent;
