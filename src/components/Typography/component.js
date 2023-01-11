import Styled from "./style";
import H1 from "../../elements/H1";
import H2 from "../../elements/H2";
import P from "../../elements/P";

const components = {
  h1: H1,
  h2: H2,
  p: P,
};

const Component = ({ children, component, ...rest }) => {
  const TypoFactory = components[component];
  return (
    <Styled.Tag as={TypoFactory} {...rest}>
      {children}
    </Styled.Tag>
  );
};
export default Component;
