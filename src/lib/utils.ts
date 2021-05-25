import { CalanderDateState } from "./payloads/default";

export const getToDayDateState = (): CalanderDateState => {
  const dateObj: Date = new Date();

  const year: number = dateObj.getFullYear();
  const month: number = dateObj.getMonth() + 1;

  return {
    month,
    year,
  };
};
