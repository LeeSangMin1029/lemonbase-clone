import styled from "styled-components";
import cssTheme from "../../styles/css";
import { useState } from "react";
import Voucher from "./Voucher";
import ArrowIcon from "../ArrowIcon";
import DropdownMenu from "../DropdownMenu";
import AButton from "../AButton";

const Wrapper = styled.header`
  background: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 68px;
`;

const Content = styled.div`
  ${cssTheme.flexBox("row", "center", "space-between")};
  margin-left: auto;
  margin-right: auto;
  min-width: 1024px;
  max-width: 1164px;
  height: 100%;
  width: 100%;
`;

const Section = styled.div`
  ${cssTheme.flexBox("row", "center")};
  position: relative;
  gap: 8px;
`;

const Component = () => {
  const [show, setShow] = useState(false);
  const handleOnClick = (e) => {
    setShow(!show);
  };
  return (
    <Wrapper>
      <Content>
        <Section>
          <AButton href="/" notTab>
            lemonbase
          </AButton>
          <AButton href="https://lemonbase.com/subscription-price/">
            <span>가격</span>
          </AButton>
          <AButton onClick={handleOnClick}>
            <span className="show_menu">
              유용한 자료
              <ArrowIcon isopen={show} />
            </span>
          </AButton>
          <AButton href="https://www.lemonbase.team/">
            <span>회사 소개</span>
          </AButton>
          <AButton href="https://help.lemonbase.com/voucher/main">
            <span>
              비대면 바우처
              <Voucher />
            </span>
          </AButton>
        </Section>
        <Section>
          <AButton href="/">
            <span>로그인</span>
          </AButton>
          <AButton blue href="https://lemonbase.com/free-trial/">
            <span>무료체험 신청</span>
          </AButton>
        </Section>
      </Content>
      <DropdownMenu show={show} setShow={setShow} />
    </Wrapper>
  );
};

export default Component;
