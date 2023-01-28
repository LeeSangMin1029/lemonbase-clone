import styled from "styled-components";

const Tag = styled.div`
  font-size: ${({ size }) => size && `${size}px`};
  margin-bottom: ${({ mb }) => mb && `${mb * 4}px`};
  text-align: ${({ textAlign }) => textAlign && "center"};
  white-space: pre-line;
  line-height: 1.4em;
  color: ${({ fontcolor }) => fontcolor || "black"};
`;

const Styled = { Tag };
export default Styled;
