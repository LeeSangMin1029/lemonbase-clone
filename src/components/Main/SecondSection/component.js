import { useState } from "react";
import Styled from "./style";
import Typography from "@components/Typography";
import MenuContainer from "./MenuContainer";

const wordList = [
  { title: "평가" },
  { title: "리뷰" },
  { title: "목표" },
  { title: "1:1 미팅" },
  { title: "수시 피드백" },
];

const Component = () => {
  const [order, setOrder] = useState(0);
  const handleView = (index) => {
    setOrder(index);
  };
  const btnList = wordList.map((word, id) => {
    return (
      <li key={id} onClick={() => handleView(id)}>
        <Typography component="span" fontColor="white">
          {word.title}
        </Typography>
      </li>
    );
  });
  return (
    <Styled.ExtendsSection justify="center">
      <div>
        <Typography component="h1" size="36" mb="10" textAlign>
          흩어진 성과 데이터를
          <br /> 통합하는 성과관리 플랫폼
        </Typography>
        <Styled.MenuList blue="blue">{btnList}</Styled.MenuList>
        <MenuContainer order={order} />
      </div>
    </Styled.ExtendsSection>
  );
};
export default Component;
