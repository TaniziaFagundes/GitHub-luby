import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;
export const List = styled.div``;

export const ContentPerfil = styled.div`
  position: absolute;
  width: 100vw;
  z-index: 2;
  background-color: var(--black);
`;

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
