import { FC, useRef, useState } from "react";
import { getToDayDateState } from "../../lib/utils";
import CalanderHeader, {
  CalanderHeaderProps,
} from "./CalanderHeader/CalanderHeader";
import CalanderList from "./CalanderList/CalanderList";
import * as S from "./styles";

interface Props extends CalanderHeaderProps {}

const Calander: FC<Props> = ({
  title,
  date = getToDayDateState(),
  onClickLeftMonth,
  onClickRightMonth,
}) => {
  return (
    <S.Container>
      <CalanderHeader
        title={title}
        date={date}
        onClickLeftMonth={onClickLeftMonth}
        onClickRightMonth={onClickRightMonth}
      />
      <CalanderList />
    </S.Container>
  );
};

export default Calander;
