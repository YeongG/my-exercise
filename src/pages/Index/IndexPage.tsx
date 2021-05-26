import { FC, useCallback, useEffect, useRef, useState } from "react";
import { DetailExercise } from "../../components";
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

  const dateClickHandler = useCallback((date: DateState) => {
    const element = document.querySelector(".will-unmount-detail");
    if (!element) {
      setSelectDate(date);
      return;
    }

    element.classList.add("fade-out");
    setTimeout(() => {
      element.classList.remove("fade-out");
      setSelectDate(date);
    }, 250);
  }, []);

  return (
    <S.Container>
      <S.GlobalStyle />
      <S.CenterDivWrap>
        <S.CalanderWrap>
          <IndexCalander onClickDate={dateClickHandler} />
        </S.CalanderWrap>
        <S.DetailInfoWrap>
          <IndexDetailExercise selectDate={selectDate} />
        </S.DetailInfoWrap>
      </S.CenterDivWrap>
    </S.Container>
  );
};

export default IndexPage;
