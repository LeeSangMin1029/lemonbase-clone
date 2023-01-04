import { useState, useEffect, useCallback } from "react";

const baseOption = {
  root: null,
  rootMargin: "0px",
};

const useIntersect = (callback = (entry, observer) => {}, option = {}) => {
  const [ref, setRef] = useState(null);
  const checkInterSect = useCallback(([entry], observer) => {
    if (entry.isIntersecting) {
      callback(entry, observer);
    }
  }, []);
  useEffect(() => {
    let observer;
    if (ref) {
      observer = new IntersectionObserver(checkInterSect, {
        ...baseOption,
        ...option,
      });
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, option, checkInterSect]);
  return [ref, setRef];
};

export default useIntersect;
