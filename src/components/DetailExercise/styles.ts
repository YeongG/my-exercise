import styled from "styled-components";
import { SlideUp } from "../../GloablStyle";

const containerAnimate = SlideUp(30);

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;
  border-radius: 4px;
  animation: ${containerAnimate} 0.5s;
`;

export const HeaderWrap = styled.div`
  padding: 5px 15px;
  border-bottom: 2px solid rgb(221, 221, 221);
`;

export const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const HealthWrap = styled.div`
  padding: 10px;
`;
export const HealthBar = styled.div`
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: rgb(246, 246, 246);
  height: 70px;
  margin: 15px 10px;
  display: flex;

  & + & {
    margin-top: 15px;
  }
`;

export const InfoWrap = styled.div`
  width: 50%;
`;
export const PercentWrap = styled.div`
  width: 50%;
`;

export const HealthImgWrap = styled.div``;

export const HelathItmeImg = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
  object-fit: cover;

  & + & {
    margin-left: 20px;
  }
`;
