import { Container } from "./styled";

const Button = ({ text, children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {text}
      {children}
    </Container>
  );
};

export default Button;
