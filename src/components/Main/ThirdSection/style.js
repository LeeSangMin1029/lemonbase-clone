import styled from "styled-components";
import Section from "@elements/Section";

const ExtendsSection = styled(Section)``;

const Blank = styled.div`
  width: ${({ preWidth }) => preWidth};
  height: ${({ preHeight }) => preHeight};
  animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Styled = { ExtendsSection, Blank };
export default Styled;
