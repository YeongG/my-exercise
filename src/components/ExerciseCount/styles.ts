import styled from "styled-components";

export const ExerciseIcon = styled.img`
  width: 120px;
  height: 120px;
  padding: 10px;
  box-sizing: border-box;

  transition: 0.4s all;
`;
export const TextCircle = styled.div`
  width: 0px;
  height: 0px;
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(221, 221, 221);
  transition: 0.7s all;
  border-radius: 50%;
`;

export const CountText = styled.span`
  font-size: 35px;
  opacity: 0;
  transition: opacity 0.4s;
  background-image: linear-gradient(#040404, #000000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`;

export const Container = styled.div`
  width: calc(50% - 2px);
  height: 180px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: center;

  &:hover {
    ${ExerciseIcon} {
      opacity: 0;
    }
    ${CountText} {
      opacity: 1;
    }

    ${TextCircle} {
      width: 100px;
      height: 100px;
    }
  }

  &:nth-child(1),
  &:nth-child(2) {
    border-bottom: 2px solid rgb(221, 221, 221);
  }

  &:nth-child(1),
  &:nth-child(3) {
    border-right: 2px solid rgb(221, 221, 221);
  }
`;
