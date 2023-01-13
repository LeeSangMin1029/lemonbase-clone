import styled from "styled-components";

const Wrapper = styled.h1`
  overflow-wrap: break-word;
`;

const Component = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Component;
