import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";

import StyledRobot from "./RobotComponent.style";

function RobotComponent({
  robot: { _id, name, img, speed, endurance, creationDate },
  actionOnClick,
}) {
  const handleClick = (event) => {
    event.stopPropagation();
    actionOnClick(_id);
  };

  return (
    <StyledRobot>
      <img src={img} alt="A robot" />
      <ul>
        <li className="name-text">{name}</li>
        <li className="speed-text">{`Speed: ${speed}`}</li>
        <li className="endurance-text">{`Endurance: ${endurance}`}</li>
        <li className="date-text">{`Creation: ${creationDate}`}</li>
      </ul>
      <FontAwesomeSvgIcon
        title={"icon"}
        className={"icon"}
        icon={faTrashCan}
        size={"2x"}
        onClick={handleClick}
      ></FontAwesomeSvgIcon>
    </StyledRobot>
  );
}
export default RobotComponent;
