import { FC, useCallback, useState } from "react";
import * as S from "../styles";
import { DetailExercise, HealthRecorder, InBody } from "../../../components";
import { DateState } from "../../../lib/payloads/default";
import { getHealthData, saveHealthData } from "../../../lib/utils";
import { HealthData, HealthRecorderState } from "../../../lib/payloads/health";

interface Props {
  selectDate: DateState;
}

const IndexDetailExercise: FC<Props> = ({ selectDate }) => {
  const [, setReload] = useState<boolean>(false);
  const data = getHealthData(selectDate);

  const submitHealth = useCallback(
    (data: HealthRecorderState) => {
      const key: string = `${selectDate.year}-${selectDate.month}-${selectDate.date}`;

      const {
        crunch,
        pushUp,
        fatPercentage,
        pullUp,
        visceralFat,
        muscleMass,
        weight,
      } = data;
      const healthData: HealthData = {
        exercise: {
          crunch,
          pullUp,
          pushUp,
        },
        health: {
          fatPercentage,
          weight,
          muscleMass,
          visceralFat,
        },
      };

      saveHealthData(key, healthData);
      setReload((prev) => !prev);
    },
    [selectDate]
  );

  return (
    <>
      {data ? (
        <S.DetailInfoWrap>
          <InBody {...data.health} />
          <S.DetailExerciseWrap>
            <DetailExercise {...data.exercise} />
          </S.DetailExerciseWrap>
        </S.DetailInfoWrap>
      ) : (
        <S.HealthRecorderWrap>
          <HealthRecorder onSubmitHealth={submitHealth} />
        </S.HealthRecorderWrap>
      )}
    </>
  );
};

export default IndexDetailExercise;
