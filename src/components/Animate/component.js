import { cloneElement } from "react";
import Styled from "./style";
import useAnime from "../../hooks/useAnime";

const Component = ({ children }) => {
  const [anime, setRef] = useAnime(false);
  return (
    <Styled.Div>
      {cloneElement(children, { ref: setRef, anime: anime ? 1 : 0 })}
    </Styled.Div>
  );
};
export default Component;
