import styled from "styled-components";
import cssTheme from "../../styles/css";

const Header = styled.header`
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 68px;
  z-index: 5;
`;

const Content = styled.div`
  ${cssTheme.flexBox("row", "center", "space-between")};
  margin-left: auto;
  margin-right: auto;
  min-width: 1024px;
  max-width: 1164px;
  height: 100%;
  width: 100%;
`;

const Area = styled.div`
  ${cssTheme.flexBox("row", "center")};
  position: relative;
  gap: 8px;
`;

const Styled = { Header, Content, Area };
export default Styled;
