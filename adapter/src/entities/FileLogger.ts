import { ILogger } from "../interfaces";

export class FileLogger implements ILogger {
  async info(message: string): Promise<void> {
    console.info(message);
    console.info("This Message was saved with FileLogger");
  }
}
