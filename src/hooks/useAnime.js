import { useState } from "react";
import useIntersect from "./useIntersect";

const useAnime = () => {
  const [anime, setAnime] = useState(true);
  const [_, setRef] = useIntersect((entry, observer) => {
    setAnime(true);
    observer.unobserve(entry.target);
  });
  return [anime, setRef];
};

export default useAnime;
