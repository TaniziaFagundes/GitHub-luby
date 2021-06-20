import { Container, Perfil, Bio } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import Menu from "../../components/Menu";
import CardTop from "../../components/CartTop";
import CardDetails from "../../components/CardDetails";
import CardFallow from "../../components/CardFallow";
const Home = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <CardTop />
      <Perfil>
        <img src={user.avatar_url} alt="avatar"></img>
        <CardDetails title={user.name} description={user.email} />
      </Perfil>
      <CardFallow />
      <CardDetails title="Bio" description={user.bio} />
      <Menu />
    </Container>
  );
};

export default Home;
