export enum LogServeityLevel {
  low = "low",
  medium = "medium",
  high = "high",
}

export class LogEntity {
  public level: LogServeityLevel;
  public message: string;
  public createdAt: Date;

  constructor(message: string, level: LogServeityLevel) {
    this.message = message;
    this.level = level;
    this.createdAt = new Date();
  }
}
