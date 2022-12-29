import { useEffect } from "react";

const useOutsideAlerter = (ref, func) => {
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        func(e);
      }
    }
    if (!document) return;
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document?.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, func]);
};

export default useOutsideAlerter;
