import { Container } from "./styled";

const Input = ({ input, setInput }) => {
  return (
    <Container>
      <input
        value={input.value}
        onChange={(e) => {
          setInput(e.target.value);
          e.preventDefault();
        }}
      ></input>
    </Container>
  );
};

export default Input;
