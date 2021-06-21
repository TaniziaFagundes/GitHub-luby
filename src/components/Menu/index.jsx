import { Link } from "react-router-dom";
import { BiHomeAlt, BiGroup } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { Container } from "./styled";

import { ReposContext } from "../../providers/Repos";
import { UserContext } from "../../providers/User";
import { FollowersContext } from "../../providers/Followers";
import { FollowingContext } from "../../providers/Following";
import { useContext } from "react";
const Menu = () => {
  const { reposSearch } = useContext(ReposContext);
  const { FollowersSearch } = useContext(FollowersContext);
  const { FollowingSearch } = useContext(FollowingContext);
  const { user } = useContext(UserContext);

  const handlerepos = (name) => {
    reposSearch(name);
  };

  const handleFollowers = (name) => {
    FollowersSearch(name);
  };

  const handleFollowing = (name) => {
    FollowingSearch(name);
  };
  return (
    <Container>
      <Link to="/home">
        <BiHomeAlt size={30} />
        <p>Home</p>
      </Link>
      <Link to="/repos" onClick={() => handlerepos(user.login)}>
        <FiGithub size={30} />
        <p>Repos</p>
      </Link>
      <Link to="/seguidores" onClick={() => handleFollowers(user.login)}>
        <BiGroup size={30} />
        <p>Seguidores</p>
      </Link>
      <Link to="/seguindo" onClick={() => handleFollowing(user.login)}>
        <BiGroup size={30} />
        <p>Seguindo</p>
      </Link>
    </Container>
  );
};

export default Menu;
