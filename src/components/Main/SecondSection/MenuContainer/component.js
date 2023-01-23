import MenuItem from "./MenuItem";

// 초깃값
const menuInfo = [
  {
    id: 1,
    title: "1년 내내 쌓은 데이터로\n공정하고 객관적인 평가하세요",
    description: [
      "1년 내내 쌓인 데이터로 업적, 역량 평가",
      "정량화된 역량 평가로 더 공정한 평가",
      "리더십 진단, 조직 진단이 가능한 다면 평가",
      "캘리브레이션 기능으로 공정한 보상과 연결",
      "회사 제도에 맞는 유연한 평가 세팅",
    ],
    link: {
      title: "평가 기능을 더 알고 싶어요 →",
      src: "https://docs.google.com/presentation/d/1WcT4KydId0QgqzIskCN1bZjEYhzW_bXS6U4NCTaRL98/edit#slide=id.g1321c2bb451_2_116",
    },
  },
  {
    id: 2,
    title: "유연한 설정으로 다양한 리뷰를\n 손쉽게 운영하세요",
    description: [
      "동료들의 피드백을 제공하는 동료 리뷰",
      "스스로 목표와 성과를 회고하는 목표 셀프 체크",
      "수습 기간 동안 온보딩을 돕는 수습 리뷰",
      "프로젝트의 배운 점을 생각하는 프로젝트 회고",
      "조직 제도의 피드백을 듣는 조직 만족도 서베이",
    ],
    link: {
      title: "리뷰 기능을 더 알고 싶어요 →",
      src: "https://docs.google.com/presentation/d/1WcT4KydId0QgqzIskCN1bZjEYhzW_bXS6U4NCTaRL98/edit#slide=id.g1321c2bb451_2_116",
    },
  },
  {
    id: 3,
    title: "상시 목표 관리 제도의 도입,\n어렵지 않아요",
    description: [
      "연 1회 수립보다 오히려 쉬워진 제도 운영",
      "팀원과 팀의 달성 현황을 한눈에 조망",
      "체크인과 코멘트로 가벼운 커뮤니케이션",
      "평가, 리뷰, 1:1 미팅과 유기적인 연결",
      "OKR, KPI 모두 담기는 유연한 구조",
    ],
    link: {
      title: "목표 기능을 더 알고 싶어요 →",
      src: "https://docs.google.com/presentation/d/1WcT4KydId0QgqzIskCN1bZjEYhzW_bXS6U4NCTaRL98/edit#slide=id.g1321c2bb451_2_245",
    },
  },
  {
    id: 4,
    title: "1:1 미팅 활성화의 열쇠,\n이젠 손 안에",
    description: [
      "전문가 추천 어젠다로 초심자도 능숙하게",
      "1:1 촉진을 위한 필수 도구, 미팅 현황 대시보드",
      "평가, 리뷰, 피드백의 재료로 축적되는 미팅 기록",
      "언제 어디서든 1:1을 할 수 있도록 모바일 앱 지원",
      "어젠다/노트 공유로 준비된 미팅 진행",
    ],
    link: {
      title: "1:1 미팅 기능을 더 알고 싶어요 →",
      src: "https://docs.google.com/presentation/d/1WcT4KydId0QgqzIskCN1bZjEYhzW_bXS6U4NCTaRL98/edit#slide=id.g1321c2bb451_2_343",
    },
  },
  {
    id: 5,
    title: "인정과 피드백이 흐르는 문화,\n만들 수 있어요",
    description: [
      "구성원들의 피드백 현황을 보여주는 대시보드",
      "우리 회사만의 핵심 가치 기반 피드백",
      "서먹한 동료끼리도 부담 없이, 가볍게 피드백",
      "평가, 리뷰, 1:1의 재료로 축적되는 피드백 기록",
      "Slack 연동으로 피드백을 가장 가까운 곳에서",
    ],
    link: {
      title: "수시 피드백 기능을 더 알고 싶어요 →",
      src: "https://docs.google.com/presentation/d/1WcT4KydId0QgqzIskCN1bZjEYhzW_bXS6U4NCTaRL98/edit#slide=id.g1321c2bb451_2_403",
    },
  },
];

const Component = ({ order }) => {
  const menuList = menuInfo.map((item, id) => {
    return order === id && <MenuItem item={item} key={item.id}></MenuItem>;
  });
  return <>{menuList}</>;
};

export default Component;
