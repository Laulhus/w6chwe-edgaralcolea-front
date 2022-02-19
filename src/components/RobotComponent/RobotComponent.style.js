import styled from "styled-components";

const StyledRobot = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  img {
    height: 230px;
    width: 200px;
    object-fit: cover;
  }
`;
export default StyledRobot;
