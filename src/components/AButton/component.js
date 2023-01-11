import Styled from "./style";

const Component = ({ children, ...rest }) => {
  return <Styled.AButton {...rest}>{children}</Styled.AButton>;
};

export default Component;
