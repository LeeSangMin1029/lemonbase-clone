import styled from "styled-components";

const Wrapper = styled.p`
  font-size: ${(props) => props.fontSize};
  overflow-wrap: break-word;
  margin-bottom: 40px;
`;

const Component = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Component;
