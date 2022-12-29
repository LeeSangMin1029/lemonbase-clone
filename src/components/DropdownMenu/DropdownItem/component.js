import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
