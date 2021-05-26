import { FC, memo, useCallback } from "react";
import { Calander } from "../../../components";
import useCalander from "../../../lib/hooks/useCalander";
import { DateState } from "../../../lib/payloads/default";

interface Props {
  onClickDate: (date: DateState) => void;
}

const IndexCalander: FC<Props> = ({ onClickDate }) => {
  const [date, setDate, changeMonth] = useCalander();

  const leftClickHandler = useCallback(() => {
    changeMonth(-1);
  }, []);
  const rightClickHandler = useCallback(() => {
    changeMonth(1);
  }, []);
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
