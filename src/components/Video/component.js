import Styled from "./style";
import portalRenderer from "../../hooks/useRenderPortal";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import { ReactComponent as CloseBtn } from "./close-button.svg";
import { createRef } from "react";

const Component = ({ setView, src, width, height, ...rest }) => {
  const ref = createRef(null);
  const onClicked = () => {
    setView(false);
  };
  useOutsideAlerter(ref, onClicked);
  const StyledComponent = (
    <Styled.Div {...rest} onClick={onClicked} ref={ref}>
      <CloseBtn id="close-btn" />
      <iframe
        title="Lemonbase | 레몬베이스 한 번에 이해하기"
        id="ytplayer"
        type="text/html"
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${src}`}
        allowFullScreen="allowFullScreen"
        allow={
          "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        }
      />
    </Styled.Div>
  );
  return portalRenderer(StyledComponent, "youtube_iframe");
};
export default Component;
