
const Button = ({ text, children, ...rest }) => {
  return (
    <Button type="button" {...rest}>
      {text}
      {children}
    </Button>
  );
};

export default Button;
