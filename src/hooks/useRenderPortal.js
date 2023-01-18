import { createPortal } from "react-dom";

const useRenderPortal = (children, id) => {
  return createPortal(children, document.getElementById(id));
};

export default useRenderPortal;
