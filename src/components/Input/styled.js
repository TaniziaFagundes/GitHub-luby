import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 90vw;
    max-width: 30rem;
    padding: 0.8rem;
    font-size: 15pt;
    margin: 0 auto;
    border-radius: 1rem;
    border-style: none;
    margin: 1rem auto;

    outline: none;

    :focus {
      border: 3px solid var(--yellow);
    }
  }
`;

export const Error = styled.div`
  position: absolute;
  right: 3rem;
  color: var(--red);
`;
