import { Container, Top } from "./styled";
import { useContext } from "react";
import { ReposContext } from "../../providers/Repos";
import { BiArrowBack } from "react-icons/bi";
import CardRepos from "../../components/CardRepos";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";
const Repos = () => {
  const { repos } = useContext(ReposContext);

  return (
    <Container>
      <Top>
        <Link to="/home">
          <BiArrowBack size={30} />
        </Link>
        <p>{repos.length} repositórios</p>
      </Top>
      {repos.map((item) => (
        <CardRepos item={item} />
      ))}
      <Menu />
    </Container>
  );
};

export default Repos;
