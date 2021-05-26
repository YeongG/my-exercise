export interface MyHealth {
  weight: number;
  fatPercentage: number;
  visceralFat: number;
  muscleMass: number;
}

export interface Exercise {
  pullUp: number;
  crunch: number;
  pushUp: number;
}

export interface HealthData {
  health: MyHealth;
  exercise: Exercise;
}

export interface LocalStroageHealthData {
  [key: string]: HealthData;
}
