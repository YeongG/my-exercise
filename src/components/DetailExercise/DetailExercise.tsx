import { FC, useEffect, useState } from "react";
import { weightIcon, fatIcon, muscleIcon, visceralFatIcon } from "../../assets";
import { HealthData } from "../../lib/payloads/health";
import * as S from "./styles";

interface Props extends HealthData {}

const DetailExercise: FC<Props> = ({}) => {
  return (
    <S.Container className="will-unmount-detail">
      <S.HeaderWrap>
        <S.HeaderTitle>세부내용</S.HeaderTitle>
      </S.HeaderWrap>
      <S.HealthWrap>
        <S.HealthImgWrap>
          <S.HelathItmeImg src={weightIcon} />
          <S.HelathItmeImg src={fatIcon} />
          <S.HelathItmeImg src={muscleIcon} />
          <S.HelathItmeImg src={visceralFatIcon} />
        </S.HealthImgWrap>
      </S.HealthWrap>
    </S.Container>
  );
};

export default DetailExercise;
