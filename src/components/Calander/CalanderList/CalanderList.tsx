import { FC, useCallback, useEffect } from "react";
import windowCalander from "window-calander";
import {
  CalanderDateState,
  CalanderListItem as CalanderListItemType,
  DateState,
} from "../../../lib/payloads/default";
import { getToDayDateState } from "../../../lib/utils";
import CalanderListItem from "../CalanderListItem/CalanderListItem";
import * as S from "../styles";

export interface CalanderListProps {
  date?: CalanderDateState;
  onClickDate?: (date: DateState) => void;
}

const CalanderList: FC<CalanderListProps> = ({
  date = getToDayDateState(),
  onClickDate,
}) => {
  const dayIndex: number = new Date().getDay();
  const dates: CalanderListItemType[] = windowCalander(
    date.year,
    date.month
  ).flat(1);

  return (
    <S.CalanderListWrap>
      <S.CalanderItemHeader isActive={dayIndex === 0}>일</S.CalanderItemHeader>
      <S.CalanderItemHeader isActive={dayIndex === 1}>월</S.CalanderItemHeader>
      <S.CalanderItemHeader isActive={dayIndex === 2}>화</S.CalanderItemHeader>
      <S.CalanderItemHeader isActive={dayIndex === 3}>수</S.CalanderItemHeader>
      <S.CalanderItemHeader isActive={dayIndex === 4}>목</S.CalanderItemHeader>
      <S.CalanderItemHeader isActive={dayIndex === 5}>금</S.CalanderItemHeader>
      <S.CalanderItemHeader isActive={dayIndex === 6}>토</S.CalanderItemHeader>
      {dates.map(({ date, isThisMonth, month, year }) => (
        <CalanderListItem
          onClick={onClickDate}
          isThisMonth={isThisMonth}
          date={date}
          month={month}
          year={year}
        />
      ))}
    </S.CalanderListWrap>
  );
};

export default CalanderList;
