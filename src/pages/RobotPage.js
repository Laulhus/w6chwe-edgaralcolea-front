import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RobotComponent from "../components/RobotComponent/RobotComponent";

const RobotPage = () => {
  const { id } = useParams();
  const robots = useSelector((state) => state.robots);
  const robot = robots.filter((robot) => robot._id === id);
  return <RobotComponent key={robot._id} robot={robot} />;
};

export default RobotPage;
