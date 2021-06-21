import { Container, Error } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../providers/User";

const Input = ({ input, setInput }) => {
  const { error, setError } = useContext(UserContext);
  return (
    <Container>
      <input
        value={input.value}
        onChange={(e) => {
          setError(false);
          setInput(e.target.value);
          e.preventDefault();
        }}
        placeholder="Usuário"
      ></input>
      <Error>
        {error && input === ""
          ? "Campo Obrigatório"
          : error
          ? "Usuário Inválido"
          : ""}
      </Error>
    </Container>
  );
};

export default Input;
