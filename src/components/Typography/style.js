import styled from "styled-components";

const Tag = styled.div`
  font-size: ${({ size }) => size}px;
  margin-bottom: ${({ mb }) => (mb ? mb * 4 : 0)}px;
`;

const Styled = { Tag };
export default Styled;
