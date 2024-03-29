import { Container, Top, List } from "./styled";
import { useContext } from "react";
import { ReposContext } from "../../providers/Repos";
import { UserContext } from "../../providers/User";
import { BiArrowBack } from "react-icons/bi";
import CardRepos from "../../components/CardRepos";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";
const Repos = () => {
  const { repos } = useContext(ReposContext);
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Top>
        <Link to="/home">
          <BiArrowBack size={30} />
        </Link>
        <p>{user.public_repos} repositórios</p>
      </Top>
      <List>
        {repos.map((item) => (
          <CardRepos item={item} key={item.id} />
        ))}
      </List>
      <Menu />
    </Container>
  );
};

export default Repos;
