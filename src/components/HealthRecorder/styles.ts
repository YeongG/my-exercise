import styled from "styled-components";
import { SlideUp } from "../../GloablStyle";

const containerAnimate = SlideUp(30);

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;
  border-radius: 4px;
  animation: ${containerAnimate} 0.3s;
  padding-bottom: 10px;
`;

export const RecorderHeader = styled.div`
  padding: 5px 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 2px solid rgb(221, 221, 221);
`;

export const RecorderForm = styled.div`
  padding: 0 15px;
`;

export const SubmitButton = styled.button`
  width: 90%;
  display: block;
  margin: 0 auto;
  border-radius: 6px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  font-size: 15px;
  background-color: rgb(255, 85, 85);
  padding: 6px;
  border: none;
  cursor: pointer;
`;
