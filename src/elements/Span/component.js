import Styled from "./style";

const Component = ({ children, ...rest }) => {
  return <Styled.Span {...rest}>{children}</Styled.Span>;
};
export default Component;
