import styled, { keyframes } from "styled-components";

export const animationIMG = keyframes`
  from{
    opacity:0;
    transform:translateY(-300px);

  }
  to{
    opacity:1;
    transform: translateY(0px)
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 98.12pt;
    height: 96.78pt;
    margin-bottom: 1rem;
    animation: ${animationIMG} 2s;
  }
`;
