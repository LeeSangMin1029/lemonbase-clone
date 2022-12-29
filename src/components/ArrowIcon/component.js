import styled from "styled-components";
import { ReactComponent as Arrow } from "./arrow.svg";
const StyledIcon = styled(Arrow)`
  transition: 0.3s;
  transform: rotate(${(props) => (props.$isopen ? "270deg" : "90deg")});
  margin-left: 5px;
`;
const Component = ({ isopen }) => {
  return (
    <StyledIcon
      className="arrow"
      width="10px"
      height="10px"
      $isopen={isopen}
    ></StyledIcon>
  );
};

export default Component;
