import { FC, useCallback, MouseEvent } from "react";
import { DateState } from "../../../lib/payloads/default";
import * as S from "../styles";

interface Props {
  isThisMonth: boolean;
  onClick?: (date: DateState) => void;
  date: number;
  year: number;
  month: number;
}

const CalanderListItem: FC<Props> = ({
  isThisMonth,
  date,
  year,
  month,
  onClick,
}) => {
  const clickHandler = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      document
        .querySelectorAll(".select")
        .forEach((element) => element.classList.remove("select"));
      e.currentTarget.classList.add("select");
      onClick && onClick({ year, month, date });
    },
    [year, month, date]
  );

  return (
    <S.CalanderItem onClick={clickHandler} isActive={!isThisMonth}>
      {date}
    </S.CalanderItem>
  );
};

export default CalanderListItem;
