import styled from "styled-components";
import cssTheme from "@styles/css";
import Section from "@elements/Section";

const ExtendsSection = styled(Section)`
  padding: 100px 0;
  width: 100%;
  > div {
    width: inherit;
  }
`;

const MenuList = styled.div`
  ${cssTheme.flexBox("row", "center")}
  padding: 0 20px;
  gap: 8px;
  margin-bottom: 32px;
  > li {
    ${cssTheme.buttonStyles("25px")};
    padding: 10px 20px;
  }
`;

const Styled = { ExtendsSection, MenuList };
export default Styled;
