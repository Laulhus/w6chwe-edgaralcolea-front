import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeSvgIcon } from "react-fontawesome-svg-icon";
import { useDispatch } from "react-redux";
import deleteRobotThunk from "../../redux/thunks/deleteRobotThunk";
import StyledRobot from "./RobotComponent.style";

function RobotComponent({
  robot: { _id, name, img, speed, endurance, creationDate },
}) {
  const dispatch = useDispatch();

  return (
    <StyledRobot>
      <img src={img} alt="Test" />
      <ul>
        <li className="name-text">{name}</li>
        <li className="speed-text">{`Speed: ${speed}`}</li>
        <li className="endurance-text">{`Endurance: ${endurance}`}</li>
        <li className="date-text">{`Creation: ${creationDate}`}</li>
      </ul>
      <FontAwesomeSvgIcon
        className={"icon"}
        icon={faTrashCan}
        size={"2x"}
        onClick={() => dispatch(deleteRobotThunk(_id))}
      />
    </StyledRobot>
  );
}
export default RobotComponent;
