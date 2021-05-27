import { ChangeEvent, FC, FormEvent, useCallback, useState } from "react";
import { RecorderInput } from "..";
import { HealthRecorderState } from "../../lib/payloads/health";
import * as S from "./styles";

interface Props {
  onSubmitHealth: (data: HealthRecorderState) => void;
}

const HealthRecorder: FC<Props> = ({ onSubmitHealth }) => {
  const [healthData, setHealthData] = useState<HealthRecorderState>({
    crunch: 0,
    pushUp: 0,
    fatPercentage: 0,
    pullUp: 0,
    visceralFat: 0,
    muscleMass: 0,
    weight: 0,
  });

  const submitHandler = useCallback(() => {
    const {
      crunch,
      weight,
      muscleMass,
      visceralFat,
      pullUp,
      fatPercentage,
      pushUp,
    } = healthData;

    onSubmitHealth(healthData);
  }, [onSubmitHealth, healthData]);

  const changeHealthData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setHealthData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return (
    <S.Container>
      <S.RecorderHeader>운동기록 작성</S.RecorderHeader>
      <S.RecorderForm>
        <RecorderInput
          inputName="weight"
          onChange={changeHealthData}
          value={String(healthData.weight)}
          inputDesc="몸무게"
        />
        <RecorderInput
          inputName="fatPercentage"
          onChange={changeHealthData}
          value={String(healthData.fatPercentage)}
          inputDesc="체지방률"
        />
        <RecorderInput
          inputName="muscleMass"
          onChange={changeHealthData}
          value={String(healthData.muscleMass)}
          inputDesc="근육량"
        />
        <RecorderInput
          inputName="visceralFat"
          onChange={changeHealthData}
          value={String(healthData.visceralFat)}
          inputDesc="내장지방"
        />
        <RecorderInput
          inputName="pullUp"
          onChange={changeHealthData}
          value={String(healthData.pullUp)}
          inputDesc="턱걸이 횟수"
        />
        <RecorderInput
          inputName="pushUp"
          onChange={changeHealthData}
          value={String(healthData.pushUp)}
          inputDesc="푸쉬업 횟수"
        />
        <RecorderInput
          inputName="crunch"
          onChange={changeHealthData}
          value={String(healthData.crunch)}
          inputDesc="크런치 횟수"
        />
        <S.SubmitButton onClick={submitHandler}>작성</S.SubmitButton>
      </S.RecorderForm>
    </S.Container>
  );
};

export default HealthRecorder;
