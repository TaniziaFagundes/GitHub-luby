import { UserContext } from "../../providers/User";
import { useState, useContext } from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";
const Login = () => {
  const { user, UserSearch } = useContext(UserContext);
  const [input, setInput] = useState("");

  return (
    <>
      <Input input={input} setInput={setInput} />
      <Button type="submit" onClick={() => UserSearch(input)} text="Acessar" />
    </>
  );
};

export default Login;
