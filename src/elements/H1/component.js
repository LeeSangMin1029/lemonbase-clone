import styled from "styled-components";

const Wrapper = styled.h1`
  font-size: ${(props) => props.fontSize};
  overflow-wrap: break-word;
`;

const Component = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Component;
