import styled from "styled-components";
import cssTheme from "../../styles/css";

const Wrapper = styled.main`
  ${cssTheme.flexBox("row", "center", "flex-start")};
  max-width: 1164px;
  min-width: 1024px;
  margin: 0 auto;
`;

const FlexSection = styled.section`
  ${cssTheme.flexBox("column")}
`;

const Component = () => {
  return (
    <Wrapper>
      <FlexSection></FlexSection>
    </Wrapper>
  );
};

export default Component;
