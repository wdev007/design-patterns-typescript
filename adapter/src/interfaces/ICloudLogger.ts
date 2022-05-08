export type LoggerTypes = "info" | "error" | "warn";

export interface ICloudLogger {
  sendToServer(message: string, type: LoggerTypes): Promise<void>;
}
