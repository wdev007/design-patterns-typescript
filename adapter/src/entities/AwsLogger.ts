import { ICloudLogger, LoggerTypes } from "../interfaces";

export class AwsLogger implements ICloudLogger {
  async sendToServer(message: string, type: LoggerTypes): Promise<void> {
    console.info(message);
    console.info(`This Message was saved with AwsLogger - type: ${type}`);
  }
}
