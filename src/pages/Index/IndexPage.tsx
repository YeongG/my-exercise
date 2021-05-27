import { FC, useCallback, useEffect, useRef, useState } from "react";
import { DateState } from "../../lib/payloads/default";
import IndexCalander from "./IndexCalander/IndexCalander";
import IndexDetailExercise from "./IndexDetailExercise/IndexDetailExercise";
import * as S from "./styles";

const IndexPage: FC<{}> = () => {
  const [selectDate, setSelectDate] = useState<DateState>({
    year: 0,
    date: 0,
    month: 0,
  });

  const changeMonthHanlder = useCallback(() => {
    setSelectDate({ year: 0, month: 0, date: 0 });
    const element = document.querySelector(".select");
    if (element) element.classList.remove("select");
  }, []);

  const dateClickHandler = useCallback((date: DateState) => {
    const element = document.querySelector(".will-unmount-inbody");
    const element2 = document.querySelector(".will-unmount-detail");
    if (!element || !element2) {
      setSelectDate(date);
      return;
    }
    element.classList.add("fade-out");
    element2.classList.add("fade-out");
    setTimeout(() => {
      element.classList.remove("fade-out");
      element2.classList.remove("fade-out");
      setSelectDate(date);
    }, 250);
  }, []);

  return (
    <S.Container>
      <S.GlobalStyle />
      <S.CenterDivWrap>
        <S.CalanderWrap>
          <IndexCalander
            onChangeMonth={changeMonthHanlder}
            onClickDate={dateClickHandler}
          />
        </S.CalanderWrap>
        <IndexDetailExercise selectDate={selectDate} />
      </S.CenterDivWrap>
    </S.Container>
  );
};

export default IndexPage;
