import { FC } from "react";
import * as S from "./styles";
import { ExerciseCount } from "..";
import { crunchIcon, pushUpIcon, pullUpIcon } from "../../assets";
import { Exercise } from "../../lib/payloads/health";

interface Props extends Exercise {}

const DetailExercise: FC<Props> = ({ crunch, pullUp, pushUp }) => {
  return (
    <S.Container className="will-unmount-detail">
      <S.DetailHeader>운동</S.DetailHeader>
      <S.ExerciseWrap>
        <ExerciseCount count={pullUp} src={pullUpIcon} />
        <ExerciseCount count={pushUp} src={pushUpIcon} />
        <ExerciseCount count={crunch} src={crunchIcon} />
      </S.ExerciseWrap>
    </S.Container>
  );
};

export default DetailExercise;
