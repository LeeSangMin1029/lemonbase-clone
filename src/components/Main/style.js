import styled from "styled-components";
import cssTheme from "../../styles/css";

const Main = styled.main`
  ${cssTheme.flexBox("column", "center", "flex-start")};
  max-width: 1164px;
  min-width: 1024px;
  margin: 0px auto;
`;

const Styled = { Main };
export default Styled;
