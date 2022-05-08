import { ILogger, ICloudLogger } from "../interfaces";

export class CloudLoggerAdapter implements ILogger {
  constructor(private cloudLogger: ICloudLogger) {}

  async info(message: string): Promise<void> {
    await this.cloudLogger.sendToServer(message, "info");
  }
}
