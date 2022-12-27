import styled from "styled-components";

const Wrapper = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 68px;
  > div {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    min-width: 1024px;
    max-width: 1164px;
    height: 100%;
    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const BtnLink = styled.a`
  span {
    padding: 13px 16px;
    border-radius: 8px;
    font-size: 14px;
    &:hover {
      background-color: #f3f5f6;
      color: #4c5067;
      transition: all 0.3s ease 0s;
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
          <button>유용한 자료</button>
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
            <span>비대면 바우처</span>
          </BtnLink>
        </Section>
        <Section>
          <BtnLink href="/">
            <span>로그인</span>
          </BtnLink>
          <FreeBtnLink href="/">
            <span>무료체험 신청</span>
          </FreeBtnLink>
        </Section>
      </Content>
    </Wrapper>
  );
};

export default Component;
