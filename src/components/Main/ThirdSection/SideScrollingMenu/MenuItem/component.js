import Styled from "./style";

const Component = ({ info }) => {
  const { src, alt } = info.img;
  return (
    <Styled.Item>
      <img src={src} alt={alt} />
    </Styled.Item>
  );
};
export default Component;
