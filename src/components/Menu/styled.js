import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--white);
  padding: 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
  border-radius: 1rem 1rem 0 0;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  svg {
    color: var(--menuItens);
  }
  p {
    color: var(--menuItens);
  }
`;
