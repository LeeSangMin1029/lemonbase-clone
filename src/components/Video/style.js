import styled from "styled-components";
import cssTheme from "../../styles/css";

const Div = styled.div`
  ${cssTheme.flexBox("center", "center", "center")};
  position: absolute;
  iframe {
    border: none;
  }
`;
const Styled = { Div };
export default Styled;
