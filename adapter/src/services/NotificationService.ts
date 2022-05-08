import { ILogger } from "../interfaces";

export class NotificationService {
  constructor(private logger: ILogger) {}

  public async send(message: string): Promise<void> {
    // Minha implementação...
    await this.logger.info(`Notification sended: ${message}`);
  }
}
