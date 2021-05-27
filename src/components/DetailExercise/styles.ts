import styled, { keyframes } from "styled-components";
import { SlideUp } from "../../GloablStyle";

const containerAnimate = SlideUp(30);

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;
  border-radius: 4px;
  animation: ${containerAnimate} 0.5s;
`;

export const DetailHeader = styled.div`
  padding: 5px 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid rgb(221, 221, 221);
`;

export const ExerciseWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
