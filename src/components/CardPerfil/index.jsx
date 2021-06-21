import { Container, Perfil } from "./styled";

import CardDetails from "../CardDetails";
import CardFallow from "../CardFallow";
const CardPerfil = ({ user }) => {
  console.log(user);
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
