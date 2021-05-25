import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  box-shadow: rgb(0 0 0 / 25%) 0px 0px 4px;
  border-radius: 4px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
`;

export const Title = styled.span`
  font-size: 19px;
  letter-spacing: -1px;
  font-weight: bold;
`;

export const Date = styled.div`
  margin: 0 8px;
  cursor: pointer;
  font-size: 14px;
`;

export const MonthControlWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftArrow = styled.div`
  width: 0;
  height: 0;
  border-right: 8px solid gray;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

export const RightArrow = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid gray;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

export const CalanderListWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  font-size: 14px;
`;

export const CalanderItem = styled.div`
  text-align: right;
`;

export const CalanderItemHeader = styled(CalanderItem)<{ isActive: boolean }>`
  color: #4b4b4b;
  height: 30px;
  border-bottom: 2px solid
    ${(props) => (props.isActive ? "rgb(255, 85, 85)" : "rgb(221, 221, 221)")};
  padding: 4px 8px;
  box-sizing: border-box;
  font-weight: bold;
`;
