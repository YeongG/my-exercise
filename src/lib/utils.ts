import { localStroageConstant } from "./constants";
import { CalanderDateState, DateState } from "./payloads/default";
import { HealthData, LocalStroageHealthData } from "./payloads/health";

export const getToDayDateState = (): CalanderDateState => {
  const dateObj: Date = new Date();

  const year: number = dateObj.getFullYear();
  const month: number = dateObj.getMonth() + 1;

  return {
    month,
    year,
  };
};

export const getHealthData = (date: DateState): HealthData | null => {
  const allDataStr: string | null = window.localStorage.getItem(
    localStroageConstant.HEALTH_DATA
  );
  if (!allDataStr) return null;

  const allData: LocalStroageHealthData = JSON.parse(allDataStr);

  const dateString: string = `${date.year}-${date.month}-${date.date}`;
  const data: HealthData = allData[dateString];

  if (!data) return null;
  return data;
};

export const saveHealthData = (key: string, data: HealthData) => {
  const allDataStr: string | null = window.localStorage.getItem(
    localStroageConstant.HEALTH_DATA
  );

  let newData: LocalStroageHealthData;
  if (!allDataStr) {
    newData = {};
    newData[key] = data;

    localStorage.setItem(
      localStroageConstant.HEALTH_DATA,
      JSON.stringify(newData)
    );
  } else {
    newData = JSON.parse(allDataStr);
    newData[key] = data;
  }

  localStorage.setItem(
    localStroageConstant.HEALTH_DATA,
    JSON.stringify(newData)
  );
};
