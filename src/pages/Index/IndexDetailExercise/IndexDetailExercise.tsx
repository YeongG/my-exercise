import { FC } from "react";
import { DetailExercise } from "../../../components";
import { DateState } from "../../../lib/payloads/default";
import { getHealthData } from "../../../lib/utils";

interface Props {
  selectDate: DateState;
}

const IndexDetailExercise: FC<Props> = ({ selectDate }) => {
  const data = getHealthData(selectDate);
  return <>{data ? <DetailExercise {...data} /> : ""}</>;
};

export default IndexDetailExercise;
