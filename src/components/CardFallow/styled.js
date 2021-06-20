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
    h1 {
      font-size: 2rem;
    }
  }
`;
