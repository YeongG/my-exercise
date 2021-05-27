import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 5px 0;

  & + & {
    border-top: 1px solid rgb(221, 221, 221);
  }
`;

export const InputName = styled.div`
  padding-left: 10px;
  width: 90px;
  font-weight: bold;
`;
export const RecorderInput = styled.input`
  width: 50px;
`;
