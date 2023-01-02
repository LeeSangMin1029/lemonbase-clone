import styled from "styled-components";
import cssTheme from "../../../styles/css";

const StyledWrapper = styled.div`
  ${cssTheme.flexBox("row")}
`;

const Component = ({ item }) => {
  return (
    <StyledWrapper>
      <a href={item.href} target="_blank" rel="noreferrer">
        {item.title}
      </a>
    </StyledWrapper>
  );
};

export default Component;
