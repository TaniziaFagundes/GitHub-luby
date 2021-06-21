import { Container, Top, List } from "./styled";
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { FollowingContext } from "../../providers/Following";
import Menu from "../../components/Menu";
import CardSegue from "../../components/CardSegue";
import { Link } from "react-router-dom";

const Seguindo = () => {
  const { following } = useContext(FollowingContext);
  return (
    <Container>
      <Top>
        <Link to="/home">
          <BiArrowBack size={30} />
        </Link>
        <p>{following.length} seguindo</p>
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
