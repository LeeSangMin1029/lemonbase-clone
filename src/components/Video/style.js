import styled from "styled-components";
import cssTheme from "../../styles/css";

const Div = styled.div`
  ${cssTheme.flexBox("column", "center", "center")};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  :after {
    width: 100%;
    height: 100%;
    content: "";
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0.8;
  }
  svg#close-btn {
    position: absolute;
    top: 24px;
    right: 24px;
    :hover {
      cursor: pointer;
    }
  }
  iframe {
    border: none;
  }
`;
const Styled = { Div };
export default Styled;
