import { FC, memo } from "react";
import CalanderHeader, {
  CalanderHeaderProps,
} from "./CalanderHeader/CalanderHeader";
import CalanderList, { CalanderListProps } from "./CalanderList/CalanderList";
import * as S from "./styles";

interface Props extends CalanderHeaderProps, CalanderListProps {}

const Calander: FC<Props> = ({
  title,
  date,
  onClickLeftMonth,
  onClickRightMonth,
  onClickDate,
}) => {
  return (
    <S.Container>
      <CalanderHeader
        title={title}
        date={date}
        onClickLeftMonth={onClickLeftMonth}
        onClickRightMonth={onClickRightMonth}
      />
      <CalanderList onClickDate={onClickDate} date={date} />
    </S.Container>
  );
};

export default memo(Calander);
