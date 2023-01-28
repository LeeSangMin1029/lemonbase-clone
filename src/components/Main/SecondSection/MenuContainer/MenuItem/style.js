import styled from "styled-components";
import cssTheme from "@styles/css";

const Item = styled.div`
  ${cssTheme.flexBox("row", "center", "flex-start")}
  width: 100%;
  animation: fadein 0.5s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Blank = styled.div`
  width: ${({ preWidth }) => preWidth};
  height: ${({ preHeight }) => preHeight};
`;

const Details = styled.div`
  margin-left: 40px;
  > ul {
    margin-bottom: 10px;
    li {
      display: flex;
      align-items: center;
      padding-bottom: 8px;
    }
    li:before {
      content: "ㆍ";
      margin-right: 8px;
      font-size: 19px;
      color: #4c5967;
    }
  }
`;

const Styled = { Item, Details, Blank };
export default Styled;
