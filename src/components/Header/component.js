import { useState } from "react";
import Styled from "./style";
import Voucher from "./Voucher";
import ArrowIcon from "../ArrowIcon";
import DropdownMenu from "../DropdownMenu";
import AButton from "../AButton";

const Component = () => {
  const [show, setShow] = useState(false);
  const handleOnClick = (e) => {
    setShow(!show);
  };
  return (
    <Styled.Header>
      <Styled.Content>
        <Styled.Area>
          <AButton href="/" notTab>
            lemonbase
          </AButton>
          <AButton href="https://lemonbase.com/subscription-price/">
            가격
          </AButton>
          <AButton onClick={handleOnClick} className="show_menu">
            유용한 자료
            <ArrowIcon isopen={show} />
          </AButton>
          <AButton href="https://www.lemonbase.team/">회사 소개</AButton>
          <AButton href="https://help.lemonbase.com/voucher/main">
            비대면 바우처
            <Voucher />
          </AButton>
        </Styled.Area>
        <Styled.Area>
          <AButton href="/">로그인</AButton>
          <AButton blue="blue" href="https://lemonbase.com/free-trial/">
            무료체험 신청
          </AButton>
        </Styled.Area>
      </Styled.Content>
      <DropdownMenu show={show} setShow={setShow} />
    </Styled.Header>
  );
};

export default Component;
