import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    margin: 0 1rem;
    margin-bottom: 3rem;
  }
`;

export const Content = styled.div`
  background-color: var(--black);

  button {
    display: flex;
    align-items: center;
    background: none;
    border-style: none;
    color: var(--white);
    font-size: 1rem;
    padding: 0.5rem;

    p {
      margin: 0.5rem;
    }
  }
`;
