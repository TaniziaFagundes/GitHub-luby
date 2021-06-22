import { Container, Content } from "./styled";
import { useState, useContext } from "react";
import { UserContext } from "../../providers/User";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Github from "../../asserts/github.png";

const Login = () => {
  const { UserSearch } = useContext(UserContext);
  const [input, setInput] = useState("");

  return (
    <Container>
      <Content>
        <img src={Github} alt="github_img" />
        <Input input={input} setInput={setInput} />
        <Button type="submit" onClick={() => UserSearch(input)} text="Entrar" />
      </Content>
    </Container>
  );
};

export default Login;
