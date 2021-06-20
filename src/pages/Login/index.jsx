import { UserContext } from "../../providers/User";
import { useState, useContext } from "react";
const Login = () => {
  const { user, UserSearch } = useContext(UserContext);
  const [input, setInput] = useState("");
  return (
    <>
      <input
        value={input.value}
        onChange={(e) => {
          setInput(e.target.value);
          e.preventDefault();
        }}
      ></input>
      <button type="submit" onClick={() => UserSearch(input)}>
        Acessar
      </button>
    </>
  );
};

export default Login;
