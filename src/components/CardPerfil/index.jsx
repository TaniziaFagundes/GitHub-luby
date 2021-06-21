import { Container, Perfil } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import CardDetails from "../CardDetails";
import CardFallow from "../CardFallow";
const CardPerfil = () => {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Perfil>
        <img src={user.avatar_url} alt="avatar"></img>
        <CardDetails title={user.name} description={user.email} />
      </Perfil>
      <CardFallow />
      <CardDetails title="Bio" description={user.bio} />
    </Container>
  );
};

export default CardPerfil;
