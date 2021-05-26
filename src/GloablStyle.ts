import styled, { createGlobalStyle, keyframes } from "styled-components";

export const fadeOut = keyframes`
  0% {}
  100% {
    transform:scale(1.1);
    opacity:0;
  }
`;

export const SlideUp = (px: number) => keyframes`
  0% {
    opacity:0;
    transform:translateY(${px}px);
  }
  100% {
    opacity:1;
    transform:translateY(0px);
  }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin:0;
        padding:0;
        font-family:"Noto Sans KR", sans-serif !important;
    }

    .fade-out {
      animation:${fadeOut} 250ms forwards !important;
    }
`;

export const GlobalBackground = styled.div`
  background-color: rgb(246, 246, 246);
`;
