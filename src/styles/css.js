import { css, keyframes } from "styled-components";

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
const translate = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
const slideAnime = () => css`
  animation: 1s ease-in-out ${translate};
`;
const cssTheme = { flexBox, slideAnime };
export default cssTheme;
