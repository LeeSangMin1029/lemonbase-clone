import styled from "styled-components";
import GridContainer from "../GridContainer";

const Wrapper = styled.main`
  display: flex;
  max-width: 1164px;
  min-width: 1024px;
  margin: 0 auto;
`;

const Component = () => {
  return (
    <Wrapper>
      <GridContainer />
    </Wrapper>
  );
};

export default Component;
