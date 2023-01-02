import styled from "styled-components";
import cssTheme from "../../styles/css";
import { useState } from "react";
import { ReactComponent as NewIcon } from "./new_voucher.svg";
import DropdownMenu from "../DropdownMenu";
import ArrowIcon from "../ArrowIcon";

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

const BtnLink = styled.a`
  span {
    padding: 13px 16px;
    border-radius: 8px;
    user-select: none;
    &:hover {
      background-color: #f3f5f6;
      color: #4c5067;
      transition: all 0.3s ease 0s;
      cursor: pointer;
    }
  }
`;

const FreeBtnLink = styled(BtnLink)`
  span {
    color: #fff;
    background-color: #328af6;
    &:hover {
      color: #fff;
      background-color: #2f6ecf;
      transition: all 0.3s ease 0s;
    }
  }
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
          <BtnLink href="/">lemonbase</BtnLink>
          <BtnLink
            href="https://lemonbase.com/subscription-price/"
            target="_blank"
            rel="noreferrer"
          >
            <span>가격</span>
          </BtnLink>
          <BtnLink onClick={handleOnClick}>
            <span className="show_menu">
              유용한 자료
              <ArrowIcon isopen={show} />
            </span>
          </BtnLink>
          <BtnLink
            href="https://www.lemonbase.team/"
            target="_blank"
            rel="noreferrer"
          >
            <span>회사 소개</span>
          </BtnLink>
          <BtnLink
            href="https://help.lemonbase.com/voucher/main"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              비대면 바우처
              <NewIcon width="38px" height="16px" fill="red" />
            </span>
          </BtnLink>
        </Section>
        <Section>
          <BtnLink href="/">
            <span>로그인</span>
          </BtnLink>
          <FreeBtnLink
            href="https://lemonbase.com/free-trial/"
            target="_blank"
            rel="noreferrer"
          >
            <span>무료체험 신청</span>
          </FreeBtnLink>
        </Section>
      </Content>
      <DropdownMenu show={show} setShow={setShow} />
    </Wrapper>
  );
};

export default Component;
