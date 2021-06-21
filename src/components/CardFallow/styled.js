import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--cardFallow);
  padding: 0.5rem;
  margin: 1rem 0;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border-style: none;
    color: var(--white);

    h1 {
      font-size: 2.3rem;
    }
    p {
      font-size: 1rem;
    }

    :hover {
      border-bottom: 2px solid var(--yellow);
    }
  }
`;
