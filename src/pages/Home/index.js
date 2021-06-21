import { Container, Perfil, Bio } from "./styled";
import Menu from "../../components/Menu";
import CardTop from "../../components/CartTop";
import CardPerfil from "../../components/CardPerfil";
const Home = () => {
  return (
    <Container>
      <CardTop />
      <CardPerfil />
      <Menu />
    </Container>
  );
};

export default Home;
