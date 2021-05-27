import { FC, memo, useCallback } from "react";
import { Calander } from "../../../components";
import useCalander from "../../../lib/hooks/useCalander";
import { DateState } from "../../../lib/payloads/default";

interface Props {
  onChangeMonth?: () => void;
  onClickDate: (date: DateState) => void;
}

const IndexCalander: FC<Props> = ({ onClickDate, onChangeMonth }) => {
  const [date, setDate, changeMonth] = useCalander();

  const leftClickHandler = useCallback(() => {
    if (onChangeMonth) onChangeMonth();
    changeMonth(-1);
  }, [onChangeMonth]);
  const rightClickHandler = useCallback(() => {
    if (onChangeMonth) onChangeMonth();
    changeMonth(1);
  }, [onChangeMonth]);
  return (
    <Calander
      title="학사일정"
      date={date}
      onClickLeftMonth={leftClickHandler}
      onClickRightMonth={rightClickHandler}
      onClickDate={onClickDate}
    />
  );
};

export default memo(IndexCalander);
