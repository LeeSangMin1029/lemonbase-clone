import styled from "styled-components";
import cssTheme from "../../styles/css";
import { cloneElement } from "react";
import useAnime from "../../hooks/useAnime";

const Wrapper = styled.div`
  ${cssTheme.slideAnime()};
`;

const Component = ({ children }) => {
  const [anime, setRef] = useAnime(false);
  return (
    <Wrapper>
      {cloneElement(children, { ref: setRef, anime: anime ? 1 : 0 })}
    </Wrapper>
  );
};
export default Component;
