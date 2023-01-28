import Styled from "./style";
import Typography from "@components/Typography";
import SideScrollingMenu from "./SideScrollingMenu";
import BrandImage from "@image/brand_images.png";

const Component = () => {
  return (
    <Styled.ExtendsSection>
      <Typography component="h1" size="36" mb="13">
        다 함께 건강한 성장을 만들어 가고 있습니다.
      </Typography>
      <Styled.Blank preWidth="1164px" preHeight="530px">
        <img src={BrandImage} alt="브랜드 이미지" width="1164px" />
      </Styled.Blank>
      <SideScrollingMenu />
    </Styled.ExtendsSection>
  );
};

export default Component;
