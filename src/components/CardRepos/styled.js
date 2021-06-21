import styled from "styled-components";

export const Container = styled.div`
  color: var(--white);
  border-bottom: 1px solid var(--grayBorder);
  padding: 1rem 0;

  p {
    padding: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;

  div {
    background-color: var(--yellow);
    height: 25pt;
    width: 6pt;
    border-radius: 0 5rem 5rem 0;
  }

  h2 {
    margin-left: 0.8rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  div {
    display: flex;
    align-items: center;
  }
`;
