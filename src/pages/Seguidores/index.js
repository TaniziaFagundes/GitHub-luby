import { Container, Top, List } from "./styled";
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FollowersContext } from "../../providers/Followers";
import Menu from "../../components/Menu";
import CardSegue from "../../components/CardSegue";
import { Link } from "react-router-dom";

const Seguidores = () => {
  const { followers } = useContext(FollowersContext);
  return (
    <Container>
      <Top>
        <Link to="/home">
          <BiArrowBack size={30} />
        </Link>
        <p>{followers.length} seguidores</p>
      </Top>
      <List>
        {followers.map((item) => (
          <CardSegue item={item} />
        ))}
      </List>
      <Menu />
    </Container>
  );
};

export default Seguidores;
