import styled from "styled-components";
import cssTheme from "../../../styles/css";
import A from "../../../elements/A";

const StyledWrapper = styled.div`
  ${cssTheme.flexBox("row")}
`;

const Component = ({ children, ...rest }) => {
  return (
    <StyledWrapper>
      <A {...rest}>{children}</A>
    </StyledWrapper>
  );
};

export default Component;
