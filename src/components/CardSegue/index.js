import { Container } from "./styled";
import { FiArrowRight } from "react-icons/fi";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/User";
const CardSegue = ({ item }) => {
  const { UserSearch } = useContext(UserContext);

  const history = useHistory();

  const handleClick = () => {
    UserSearch(item.login);
    history.push("/home");
  };
  return (
    <Container>
      <div></div>
      <img src={item.avatar_url} alt="avatar" />
      <p>#{item.login}</p>
      <button onClick={() => handleClick()}>
        <FiArrowRight size={25} />
      </button>
    </Container>
  );
};

export default CardSegue;
