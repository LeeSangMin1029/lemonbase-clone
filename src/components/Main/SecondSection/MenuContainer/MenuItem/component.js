import Typography from "@components/Typography";
import FirstImage from "@image/1.png";
import SecondImage from "@image/2.png";
import ThirdImage from "@image/3.png";
import FourthImage from "@image/4.png";
import FifthImage from "@image/5.png";
import Styled from "./style";

const imageComp = {
  1: FirstImage,
  2: SecondImage,
  3: ThirdImage,
  4: FourthImage,
  5: FifthImage,
};

const Component = ({ item }) => {
  const Image = imageComp[item.id];
  const { title: linkTitle, src: href } = item.link;
  const descriptList = item.description.map((des, i) => (
    <li key={i}>
      <Typography component="p" size="14" fontcolor="#4C5967">
        {des}
      </Typography>
    </li>
  ));
  return (
    <Styled.Item>
      <Styled.Blank preWidth="768px" preHeight="475px">
        <img src={Image} width="768px" alt={item.title} />
      </Styled.Blank>
      <Styled.Details>
        <Typography component="h1" size="22" mb="4">
          {item.title}
        </Typography>
        <ul>{descriptList}</ul>
        <Typography href={href} component="a" size="16" fontcolor="#328af6">
          {linkTitle}
        </Typography>
      </Styled.Details>
    </Styled.Item>
  );
};
export default Component;
