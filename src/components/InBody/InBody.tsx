import { FC } from "react";
import { ImageTextBox } from "..";
import { weightIcon, fatIcon, muscleIcon, visceralFatIcon } from "../../assets";
import { MyHealth } from "../../lib/payloads/health";
import * as S from "./styles";

interface Props extends MyHealth {}

const InBody: FC<Props> = ({
  weight,
  fatPercentage,
  muscleMass,
  visceralFat,
}) => {
  return (
    <S.Container className="will-unmount-inbody">
      <S.HeaderWrap>
        <S.HeaderTitle>건강</S.HeaderTitle>
      </S.HeaderWrap>
      <S.HealthWrap>
        <S.HealthImgWrap>
          <ImageTextBox text={`${weight}kg`} src={weightIcon} />
          <ImageTextBox text={`${fatPercentage}%`} src={fatIcon} />
          <ImageTextBox text={`${muscleMass}%`} src={muscleIcon} />
          <ImageTextBox text={`${visceralFat}kg`} src={visceralFatIcon} />
        </S.HealthImgWrap>
      </S.HealthWrap>
    </S.Container>
  );
};

export default InBody;
