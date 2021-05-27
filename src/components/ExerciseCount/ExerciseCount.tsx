import { FC } from "react";
import * as S from "./styles";

interface Props {
  src: string;
  count: number;
}

const ExerciseCount: FC<Props> = ({ count, src }) => {
  return (
    <S.Container>
      <S.ExerciseIcon src={src} />
      <S.TextCircle>
        <S.CountText>{count}</S.CountText>
      </S.TextCircle>
    </S.Container>
  );
};

export default ExerciseCount;
