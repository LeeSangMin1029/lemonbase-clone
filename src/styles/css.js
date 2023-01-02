import { css } from "styled-components";

const flexBox = (
  direction = "row",
  align = "center",
  justify = "center"
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
`;
const cssTheme = { flexBox };
export default cssTheme;
