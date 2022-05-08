export interface ILogger {
  info(message: string): Promise<void>;
}
