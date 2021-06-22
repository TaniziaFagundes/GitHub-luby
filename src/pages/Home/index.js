import { Container } from "./styled";
import Menu from "../../components/Menu";
import CardTop from "../../components/CartTop";
import CardPerfil from "../../components/CardPerfil";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <CardTop user={user} />
      <CardPerfil user={user} />
      <Menu />
    </Container>
  );
};

export default Home;
