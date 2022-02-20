import styled from "styled-components";

const StyledRobot = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid rgb(73, 53, 54);
  border-radius: 20px;
  background-color: bisque;
  &:hover {
    background-color: lightblue;
    cursor: pointer;
  }
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
  .icon {
    padding-top: 15px;
    cursor: pointer;
    &:hover {
      color: #d32c2c;
      cursor: pointer;
    }
  }
`;
export default StyledRobot;
