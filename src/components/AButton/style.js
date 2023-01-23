import styled from "styled-components";
import cssTheme from "@styles/css";
import A from "../../elements/A";

const AButton = styled(A)`
  ${cssTheme.buttonStyles("8px")}
  padding: 13px 16px;
`;

const Styled = { AButton };
export default Styled;
