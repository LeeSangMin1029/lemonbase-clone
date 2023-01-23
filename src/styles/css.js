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

const buttonStyles = (radius) => css`
  color: ${(props) => (props.blue ? "#fff" : "#000")};
  background-color: ${(props) => (props.blue ? "#328af6" : "#fff")};
  user-select: none;
  cursor: pointer;
  border-radius: ${radius};
  &:hover {
    background-color: ${(props) => (props.blue ? "#2f6ecf" : "#f3f5f6")};
    color: ${(props) => (props.blue ? "#fff" : "#4c5067")};
    transition: all 0.3s ease 0s;
  }
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
  ${(props) => props.children.type} {
    &[anime="0"] {
      opacity: 0;
    }
    &[anime="1"] {
      animation: 1s ease-in-out ${translate};
    }
  }
`;

const cssTheme = { flexBox, slideAnime, buttonStyles };
export default cssTheme;
