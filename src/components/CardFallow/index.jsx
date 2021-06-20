import { Container } from "./styled";
import { useContext } from "react";

import { UserContext } from "../../providers/User";

const Card = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <div>
        <h1>{user.followers}</h1>
        <p>Seguidores</p>
      </div>
      <div>
        <h1>{user.following}</h1>
        <p>Seguindo</p>
      </div>
      <div>
        <h1>{user.public_repos}</h1>
        <p>Repos</p>
      </div>
    </Container>
  );
};

export default Card;
