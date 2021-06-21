import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--black);
  height: 6rem;
`;

export const Content = styled.div`
  background-color: var(--black);
  height: 6rem;
  display: flex;
  align-items: start;
  justify-content: flex-end;

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
