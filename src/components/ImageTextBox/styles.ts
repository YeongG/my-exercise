import styled from "styled-components";

export const HoverText = styled.div`
  position: absolute;
  width: 70px;
  height: 30px;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px;
  border: 1px solid rgb(221, 221, 221);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;
  transition: 0.3s all;
`;

export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    ${HoverText} {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const ImageItem = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
