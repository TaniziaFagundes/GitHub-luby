import { Container, Top, List } from "./styled";
import { useContext } from "react";
import { UserContext } from "../../providers/User";
import { BiArrowBack } from "react-icons/bi";
import { FollowingContext } from "../../providers/Following";
import Menu from "../../components/Menu";
import CardSegue from "../../components/CardSegue";
import { Link } from "react-router-dom";

const Seguindo = () => {
  const { following } = useContext(FollowingContext);
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Top>
        <Link to="/home">
          <BiArrowBack size={30} />
        </Link>
        <p>{user.following} seguindo</p>
      </Top>
      <List>
        {following.map((item) => (
          <CardSegue item={item} key={item.id} />
        ))}
      </List>
      <Menu />
    </Container>
  );
};

export default Seguindo;
