import { useCallback, useRef, useState } from "react";
import { CalanderDateState } from "../payloads/default";

const useCalander = () => {
  const dateObj = useRef<Date>(new Date());
  const [date, setDate] = useState<CalanderDateState>({
    year: dateObj.current.getFullYear(),
    month: dateObj.current.getMonth() + 1,
  });

  const changeMonth = useCallback((changeNum: number) => {
    const nowMonth: number = dateObj.current.getMonth();
    dateObj.current.setMonth(nowMonth + changeNum);

    const afterYear: number = dateObj.current.getFullYear();
    const afterMonth: number = dateObj.current.getMonth() + 1;

    setDate({
      year: afterYear,
      month: afterMonth,
    });
  }, []);

  return [date, setDate, changeMonth] as const;
};

export default useCalander;
