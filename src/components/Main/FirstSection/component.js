import { useState } from "react";
import Styled from "./style";
import Typography from "@components/Typography";
import AButton from "@components/AButton";
import Animate from "@components/Animate";
import Video from "@components/Video";
import perManage from "@image/p_manage.png";

const Component = () => {
  const [view, setView] = useState(false);
  const onClickVideoPlay = () => {
    setView(true);
  };
  return (
    <>
      <Styled.ExtendsSection direction="row">
        <div>
          <Typography component="h1" size="48" mb="2">
            일회성 평가 대신
            <br />
            지속적인 성과 관리
          </Typography>
          <Typography component="p" size="18" mb="10">
            실시간 목표 관리, 매주 1:1 미팅, 수시 피드백, 데이터 기반 평가까지.
            <br />
            건강한 성과 관리 활동으로 하루 하루 더 빠르게 성장합니다!
          </Typography>
          <div>
            <AButton blue="blue" href="https://lemonbase.com/free-trial">
              14일 무료체험 신청
            </AButton>
            <AButton onClick={onClickVideoPlay}>서비스 소개 영상 보기</AButton>
          </div>
        </div>
        <Styled.Blank preWidth="470px" preHeight="370px">
          <Animate>
            <img src={perManage} alt="성과관리" width="470" />
          </Animate>
        </Styled.Blank>
      </Styled.ExtendsSection>
      {view && (
        <Video
          setView={setView}
          width="1268"
          height="713"
          src="_g_8qeV9nPo?autoplay=1"
        />
      )}
    </>
  );
};

export default Component;
