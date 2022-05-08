import { ISubscriber } from "./ISubscriber";

export interface IPublisher<T> {
  state: T[];
  subscribe(subscriber: ISubscriber): void;
  unsubscribe(subscriber: ISubscriber): void;
  notifySubscribers(): void;
  mainBusinessLogic(newParameter: T): void;
}
