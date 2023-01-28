import styled from "styled-components";
import Section from "@elements/Section";

const ExtendsSection = styled(Section)`
  padding: 72px 0;
  div {
    flex: 0 0 50%;
  }
`;

const Blank = styled.div`
  width: ${({ preWidth }) => preWidth};
  height: ${({ preHeight }) => preHeight};
`;

const Styled = { ExtendsSection, Blank };
export default Styled;
