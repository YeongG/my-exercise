import styled, { createGlobalStyle } from "styled-components";
import { SlideUp } from "../../GloablStyle";

export const calanderAnimation = SlideUp(50);
export const Container = styled.div``;

export const GlobalStyle = createGlobalStyle`
  body {
    background:rgb(246,246,246);
  }
`;
export const CenterDivWrap = styled.div`
  padding-top: 60px;
  display: flex;
  justify-content: center;

  transition: 500ms all;
  min-width: 1000px;
`;

export const CalanderWrap = styled.div`
  width: 50%;
  transition: 500ms all;
  animation: ${calanderAnimation} 0.5s;
  @media (max-width: 1400px) {
    width: 65%;
  }
`;

export const DetailInfoWrap = styled.div`
  width: 20%;
  margin-left: 15px;
  transition: 500ms all;

  @media (max-width: 1400px) {
    width: 30%;
  }
`;

export const DetailExerciseWrap = styled.div`
  margin-top: 20px;
`;

export const HealthRecorderWrap = styled.div`
  width: 10%;
  margin-left: 15px;
`;
