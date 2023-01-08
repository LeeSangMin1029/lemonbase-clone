import styled from "styled-components";
import cssTheme from "../../styles/css";
import Section from "../../elements/Section";
import H1 from "../../elements/H1";
import P from "../../elements/P";
import AButton from "../AButton";
import perManage from "../../image/p_manage.png";

const Wrapper = styled.main`
  ${cssTheme.flexBox("column", "center", "flex-start")};
  max-width: 1164px;
  min-width: 1024px;
  margin: 0px auto;
  width: 100%;
  section > div {
    flex: 0 0 50%;
    width: 100%;
    div {
      display: flex;
    }
  }
`;

const Component = () => {
  return (
    <Wrapper>
      <Section>
        <div>
          <H1 fontSize="40px">
            일회성 평가 대신
            <br />
            지속적인 성과 관리
          </H1>
          <P>
            실시간 목표 관리, 매주 1:1 미팅, 수시 피드백, 데이터 기반 평가까지.
            <br />
            건강한 성과 관리 활동으로 하루 하루 더 빠르게 성장합니다!
          </P>
          <div>
            <AButton blue="blue" href="https://lemonbase.com/free-trial">
              <span>14일 무료체험 신청</span>
            </AButton>
            <AButton>서비스 소개 영상 보기</AButton>
          </div>
        </div>
        <div>
          <img src={perManage} alt="성과관리" width="470" />
        </div>
      </Section>
    </Wrapper>
  );
};

export default Component;
