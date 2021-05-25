import { FC } from "react";
import { CalanderDateState } from "../../../lib/payloads/default";
import { getToDayDateState } from "../../../lib/utils";
import * as S from "../styles";

export interface CalanderHeaderProps {
  title: string;
  date?: CalanderDateState;
  onClickLeftMonth: () => void;
  onClickRightMonth: () => void;
}

const CalanderHeader: FC<CalanderHeaderProps> = ({
  title,
  date = getToDayDateState(),
  onClickLeftMonth,
  onClickRightMonth,
}) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      <S.MonthControlWrap>
        <S.LeftArrow onClick={onClickLeftMonth} />
        <S.Date>
          {date.year}.{date.month}
        </S.Date>
        <S.RightArrow onClick={onClickRightMonth} />
      </S.MonthControlWrap>
    </S.Header>
  );
};

export default CalanderHeader;
