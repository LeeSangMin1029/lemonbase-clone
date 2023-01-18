import Styled from "./style";
import portalRenderer from "../../hooks/useRenderPortal";

const Component = ({ src, width, height, ...rest }) => {
  const StyledComponent = (
    <Styled.Div {...rest}>
      <iframe
        title="youtube_video"
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
