import { Container } from "./styled";
import { FiArrowRight } from "react-icons/fi";
const CardSegue = ({ item }) => {
  return (
    <Container>
      <div></div>
      <img src={item.avatar_url} alt="avatar" />
      <p>#{item.login}</p>
      <section>
        <FiArrowRight size={25} />
      </section>
    </Container>
  );
};

export default CardSegue;
