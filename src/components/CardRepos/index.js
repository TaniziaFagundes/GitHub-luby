import { Container, Content, Icons } from "./styled";
import { AiOutlineStar } from "react-icons/ai";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
const CardRepos = ({ item }) => {
  return (
    <Container>
      <Content>
        <div></div>
        <h2>{item.name}</h2>
      </Content>
      <p>{item.Description}</p>
      <Icons>
        <div>
          <AiOutlineStar size={20} color={`var(--yellow)`} />
          <p>{item.stargazers_count}</p>
        </div>
        <div>
          <BiLockOpenAlt size={20} color={`var(--green)`} />
          <BiLockAlt size={20} color={`var(--red)`} />
        </div>
      </Icons>
    </Container>
  );
};

export default CardRepos;
