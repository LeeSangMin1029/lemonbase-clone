import Styled from "./style";

const Component = ({ src, width, height, ...rest }) => {
  return (
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
};
export default Component;
