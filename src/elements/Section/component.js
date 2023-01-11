import styled from "styled-components";
import cssTheme from "../../styles/css";

const Wrapper = styled.section`
  ${cssTheme.flexBox("row", "center", "space-between")};
  width: 100%;
`;

const Component = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Component;
