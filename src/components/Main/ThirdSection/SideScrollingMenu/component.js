import Styled from "./style";
import MenuItem from "./MenuItem";
import LotteConf from "@image/lotteconf.png";
import Encar from "@image/encar.png";
import Idus from "@image/idus.png";
import Zigzag from "@image/zigzag.png";
import MyRealtrip from "@image/myrealtrip.png";
import TodayHome from "@image/todayhome.png";

const menuInfo = [
  {
    id: 1,
    img: {
      src: LotteConf,
      alt: "롯데제과",
    },
    title:
      "다면평가 설계부터 결과 분석까지 레몬베이스 컨설팅을 받았고, 반응이 좋아 전체 조직으로 확대하고 있어요.",
    description:
      "조직 변화를 이끌어야 하는 대기업, 수평적 문화를 지향하는 회사들에 추천합니다.",
    name: "윤병화",
    responsibility: "인사담당 매니저",
  },
  {
    id: 2,
    img: {
      src: Encar,
      alt: "encar",
    },
    title: "성과 데이터를 쌓고 쉽게 확인할 수 있다는 게 아주 좋았습니다.",
    description:
      "조직의 성과와 역량을 데이터에 기반해서 진단할 수 있는 토대가 생겼습니다.",
    name: "김상범",
    responsibility: "엔카 CEO",
  },
  {
    id: 3,
    img: {
      src: Idus,
      alt: "idus",
    },
    title: "직원들의 리뷰 작성 경험이 훨씬 좋아졌어요.",
    description:
      "구글 설문지로 진행할 때보다 시각적으로 편안해서 직원들도 더 열심히 쓰게 되었다고 해요.",
    name: "정정민",
    responsibility: "백패커 성장지원셀 리더",
  },
  {
    id: 4,
    img: {
      src: Zigzag,
      alt: "zigzag",
    },
    title: "인원이 2배로 늘었는데 평가 운영 시간은 75%나 줄었어요.",
    description:
      "문서를 만들고 권한을 설정하는 작업도 더 이상 필요 없고, 작성 현황도 한 눈에 볼 수 있어요.",
    name: "이유진",
    responsibility: "지그재그 인사팀장",
  },
  {
    id: 5,
    img: {
      src: MyRealtrip,
      alt: "myrealtrip",
    },
    title:
      "타운홀 미팅에선 '앞'이 어느 방향인지, 1:1 미팅에선 개인이 '앞'을 향해 어떤 기여를 하고 있는지 설명해요.",
    description:
      "어떤 속도로 나아가고 있고, 어떤 부분이 아쉬운지를 밝히게 되죠.",
    name: "이동건",
    responsibility: "마이리얼트립 CEO",
  },
  {
    id: 6,
    img: {
      src: Idus,
      alt: "idus",
    },
    title:
      "기업 문화인 Backpackr Culture Fit을 기준으로 조직 적합도에 대한 동료 리뷰를 진행해요.",
    description:
      "레몬베이스를 쓰면서부턴 직원들의 성숙도가 올라갔는지 굉장히 정제된 언어로 동료 피드백이 들어와요.",
    name: "김동환",
    responsibility: "백패커 CEO",
  },
  {
    id: 7,
    img: {
      src: TodayHome,
      alt: "오늘의 집",
    },
    title: "1:1 미팅 보드에 히스토리 관리가 되어서 좋아요.",
    description:
      "그리고 리더로서 팀원에 대한 피드백 내용을 미팅 보드에서 바로 확인 가능해서 좋습니다.",
    name: "",
    responsibility: "버킷플레이스 팀 리더",
  },
];

const Component = () => {
  const list = menuInfo.map((item) => (
    <MenuItem key={item.id} info={item}></MenuItem>
  ));
  return <Styled.Menu>{list}</Styled.Menu>;
};

export default Component;
