import styled from "styled-components";
import A from "../../elements/A";

const AButton = styled(A)`
  color: ${(props) => (props.blue ? "#fff" : "#000")};
  background-color: ${(props) => (props.blue ? "#328af6" : "#fff")};
  padding: 13px 16px;
  border-radius: 8px;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.blue ? "#2f6ecf" : "#f3f5f6")};
    color: ${(props) => (props.blue ? "#fff" : "#4c5067")};
    transition: all 0.3s ease 0s;
  }
`;

const Component = ({ children, ...rest }) => {
  return <AButton {...rest}>{children}</AButton>;
};

export default Component;
