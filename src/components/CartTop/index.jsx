import { Container, Content } from "./styled";
import { FiLogOut } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const CardTop = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    return history.push("/");
  };
  return (
    <Container>
      <Content>
        <button onClick={logout}>
          <p>Sair</p>
          <FiLogOut size={22} color={`var(--red)`} />
        </button>
      </Content>
    </Container>
  );
};

export default CardTop;
