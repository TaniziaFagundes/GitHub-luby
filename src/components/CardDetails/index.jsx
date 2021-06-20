import { Container } from "./styled";

const CardDetails = ({ title, description }) => {
  return (
    <Container>
      <section>
        <div></div>
        <h2>{title}</h2>
      </section>
      <p>{description}</p>
    </Container>
  );
};

export default CardDetails;
