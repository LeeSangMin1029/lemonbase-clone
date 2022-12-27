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

const BtnLinkWithIcon = styled(BtnLink)`
  span:after {
    content: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-10 6 80 40'%3E%3Cpath fill='red' d='M61 14H3a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h58a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2ZM21.5 39a2 2 0 0 1-1.5 1.93 1.93 1.93 0 0 1-.53.07 2 2 0 0 1-1.72-1l-4.61-7.75V39a2 2 0 0 1-4 0V25a2 2 0 0 1 3.71-1l4.62 7.75V25a2 2 0 0 1 4 0Zm9.5-9a2 2 0 0 1 0 4h-2.5v3h6a2 2 0 0 1 0 4h-8a2 2 0 0 1-2-2V25a2 2 0 0 1 2-2h8a2 2 0 0 1 0 4h-6v3Zm23.5 9a2 2 0 0 1-.78 1.58 2.11 2.11 0 0 1-.27.18l-.22.1h-.39a1.66 1.66 0 0 1-.32 0 2 2 0 0 1-1.58-.78l-.09-.11-3.74-4.85-3.83 5a2 2 0 0 1-1.58.78h-.2a2 2 0 0 1-2-2V25a2 2 0 0 1 4 0v8.38l1.9-2.45.11-.15a2 2 0 0 1 .36-.36 1.67 1.67 0 0 1 .28-.18 1.51 1.51 0 0 1 .26-.12h.1a1.22 1.22 0 0 1 .26-.06 1.72 1.72 0 0 1 .64 0 1.22 1.22 0 0 1 .26.06h.1a1.51 1.51 0 0 1 .26.12 1.67 1.67 0 0 1 .28.18 2.05 2.05 0 0 1 .47.51l1.72 2.22V25a2 2 0 0 1 4 0Z'/%3E%3C/svg%3E");
    width: 30px;
    margin-left: 8px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
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
          <BtnLinkWithIcon
            href="https://help.lemonbase.com/voucher/main"
            target="_blank"
            rel="noreferrer"
          >
            <span>비대면 바우처</span>
          </BtnLinkWithIcon>
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
