import { Container } from "./styled";

const Button = ({ text, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {text}
    </Container>
  );
};

export default Button;
