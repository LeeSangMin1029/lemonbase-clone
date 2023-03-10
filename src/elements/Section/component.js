import Styled from "./style";

const Component = ({ children, ...rest }) => {
  return <Styled.Section {...rest}>{children}</Styled.Section>;
};

export default Component;
