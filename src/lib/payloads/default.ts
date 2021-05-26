export interface DateState {
  year: number;
  month: number;
  date: number;
}

export interface CalanderDateState {
  year: number;
  month: number;
}

export interface CalanderListItem {
  date: number;
  day: number;
  isThisMonth: boolean;
  month: number;
  year: number;
}
