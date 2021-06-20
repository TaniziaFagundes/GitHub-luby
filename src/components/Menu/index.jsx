import { Link } from "react-router-dom";
import { BiHomeAlt, BiGroup } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Container } from "./styled";
const Menu = () => {
  return (
    <Container>
      <Link to="/home">
        <BiHomeAlt size={30} />
        <p>Home</p>
      </Link>
      <Link to="/repos">
        <FiGithub size={30} />
        <p>Repos</p>
      </Link>
      <Link to="/seguidores">
        <BiGroup size={30} />
        <p>Seguidores</p>
      </Link>
      <Link to="/seguindo">
        <BiGroup size={30} />
        <p>Seguindo</p>
      </Link>
    </Container>
  );
};

export default Menu;
