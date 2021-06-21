import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--grayBorder);
  padding: 1.3rem 0;
  color: var(--white);
  p {
    font-size: 1.3rem;
  }
  img {
    width: 4rem;
    border-radius: 50%;
    margin: 0 1rem;
    border: 2px solid var(--white);
  }
  div {
    background-color: var(--yellow);
    height: 25pt;
    width: 6pt;
    border-radius: 0 5rem 5rem 0;
  }
  section {
    position: absolute;
    right: 2rem;
  }
`;
