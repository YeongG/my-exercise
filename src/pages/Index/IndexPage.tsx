import { FC, useCallback, useEffect, useRef } from "react";
import { Calander } from "../../components";
import useCalander from "../../lib/hooks/useCalander";
import * as S from "./styles";

const IndexPage: FC<{}> = () => {
  const [date, setDate, changeMonth] = useCalander();

  const leftClickHandler = useCallback(() => {
    changeMonth(-1);
  }, []);
  const rightClickHandler = useCallback(() => {
    changeMonth(1);
  }, []);

  return (
    <S.Container>
      <S.CenterDivWrap>
        <Calander
          title="학사일정"
          date={date}
          onClickLeftMonth={leftClickHandler}
          onClickRightMonth={rightClickHandler}
        />
      </S.CenterDivWrap>
    </S.Container>
  );
};

export default IndexPage;
