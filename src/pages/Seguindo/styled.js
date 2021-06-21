import styled from "styled-components";

export const Container = styled.div``;
export const List = styled.div``;

export const Top = styled.div`
  background-color: var(--black);
  height: 10vh;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: var(--white);
    position: absolute;
    left: 0;
  }
  p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
