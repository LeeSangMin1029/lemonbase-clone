import styled from "styled-components";
import cssTheme from "../../styles/css";

const Section = styled.section`
  ${cssTheme.flexBox(
    ({ direction }) => (direction ? direction : "column"),
    ({ align }) => (align ? align : "center"),
    ({ justify }) => (justify ? justify : "center")
  )};
  width: 100%;
`;

const Styled = { Section };
export default Styled;
