import styled from "styled-components";
import Section from "@elements/Section";

const ExtendsSection = styled(Section)`
  padding: 72px 0;
`;

const Blank = styled.div`
  width: ${({ preWidth }) => preWidth};
  height: ${({ preHeight }) => preHeight};
`;

const Styled = { ExtendsSection, Blank };
export default Styled;
