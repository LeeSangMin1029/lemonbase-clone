const Component = ({ children, href, notTab, ...rest }) => {
  return !notTab ? (
    <a href={href} target="_blank" rel="noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <a href={href} {...rest}>
      {children}
    </a>
  );
};

export default Component;
