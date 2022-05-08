import { AwsLogger } from "./entities/AwsLogger";
import { FileLogger } from "./entities/FileLogger";
import { CloudLoggerAdapter } from "./entities/CloudLoggerAdapter";
import { NotificationService } from "./services/NotificationService";

const appWithFileLogger = async () => {
  const logger = new FileLogger();
  const notificationService = new NotificationService(logger);

  await notificationService.send("01 - Mandando uma mensagem...");
};

const appWithoutFileLogger = async () => {
  const awsLogger = new AwsLogger();
  const logger = new CloudLoggerAdapter(awsLogger);
  const notificationService = new NotificationService(logger);

  await notificationService.send("02 - Mandando uma mensagem...");
};

appWithFileLogger();
appWithoutFileLogger();
