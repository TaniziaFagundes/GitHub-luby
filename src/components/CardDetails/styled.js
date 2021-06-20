import styled from "styled-components";

export const Container = styled.div`
  section {
    display: flex;
    align-items: center;
  }
  div {
    background-color: var(--yellow);
    height: 35pt;
    width: 8pt;
    border-radius: 0 5rem 5rem 0;
  }
  h2 {
    margin-left: 1rem;
  }

  p {
    padding: 0rem 2rem;
    font-weight: lighter;
    line-height: 15pt;
    font-size: 18px;
  }
`;
