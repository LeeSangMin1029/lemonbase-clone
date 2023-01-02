import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 12px;
`;

const Description = styled.div`
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 300;
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
  margin-right: 10px;
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
      <div>
        <Title>
          일회성 평가 대신<br></br>지속적인 성과 관리
        </Title>
        <Description>
          실시간 목표 관리, 매주 1:1 미팅, 수시 피드백, 데이터 기반 평가까지.
          <br></br>
          건강한 성과 관리 활동으로 하루 하루 더 빠르게 성장합니다!
        </Description>
        <div>
          <FreeBtnLink
            href="https://lemonbase.com/free-trial/"
            target="_blank"
            rel="noreferrer"
          >
            <span>무료체험 신청</span>
          </FreeBtnLink>
          <BtnLink>
            <span>서비스 소개 영상 보기</span>
          </BtnLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Component;
