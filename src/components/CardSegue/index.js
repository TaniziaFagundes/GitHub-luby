import { Container } from "./styled";
import { BiArrowBack } from "react-icons/bi";
const CardSegue = ({ item }) => {
  return (
    <Container>
      <div></div>
      <img src={item.avatar_url} alt="avatar" />
      <p>#{item.login}</p>
      <section>
        <BiArrowBack size={25} />
      </section>
    </Container>
  );
};

export default CardSegue;
