import styled from "styled-components";
import A from "../../elements/A";

const AButton = styled(A)`
  span {
    padding: 13px 16px;
    border-radius: 8px;
    user-select: none;
    cursor: pointer;
    &:hover {
      background-color: #f3f5f6;
      color: #4c5067;
      transition: all 0.3s ease 0s;
    }
  }
`;

const Component = ({ children, ...rest }) => {
  return <AButton {...rest}>{children}</AButton>;
};

export default Component;
