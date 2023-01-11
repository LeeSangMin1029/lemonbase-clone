import styled from "styled-components";
import cssTheme from "../../styles/css";

const DropDownMenu = styled.div`
  ${cssTheme.flexBox("column", "flex-start")};
  display: ${(props) => (props.show ? "flex" : "none")};
  position: absolute;
  background-color: #fff;
  z-index: 1;
  border-radius: 8px;
  width: 140px;
  height: 110px;
  top: calc(100% + 0.25rem);
  left: ${(props) => props.pos.x}px;
  padding: 0.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  gap: 1em;
`;

const Styled = { DropDownMenu };
export default Styled;
