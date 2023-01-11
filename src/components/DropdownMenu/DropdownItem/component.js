import Styled from "./style";
import A from "../../../elements/A";

const Component = ({ children, ...rest }) => {
  return (
    <Styled.MenuItem>
      <A {...rest}>{children}</A>
    </Styled.MenuItem>
  );
};

export default Component;
