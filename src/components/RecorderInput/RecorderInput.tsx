import { ChangeEvent, FC } from "react";
import * as S from "./styles";

interface Props {
  value: string;
  inputDesc: string;
  inputName: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RecorderInput: FC<Props> = ({
  value,
  onChange,
  inputName,
  inputDesc,
}) => {
  return (
    <S.Container>
      <S.InputName>{inputDesc}</S.InputName>
      <S.RecorderInput
        type="number"
        name={inputName}
        value={value}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default RecorderInput;
