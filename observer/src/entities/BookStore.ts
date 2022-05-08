import { v4 as uuid } from "uuid";
import { IBook, IPublisher, ISubscriber } from "../interfaces";

export class BookStore implements IPublisher<IBook> {
  state: IBook[] = [];

  private subscribers = new Map<string, ISubscriber>();

  subscribe(subscriber: ISubscriber): void {
    this.subscribers.set(subscriber.id, subscriber);
  }

  unsubscribe(subscriber: ISubscriber): void {
    if (!this.subscribers.has(subscriber.id)) {
      console.log("Não existe esse subscriber: ", JSON.stringify(subscriber));
      return;
    }

    this.subscribers.delete(subscriber.id);
  }

  notifySubscribers(): void {
    this.subscribers.forEach((subscriber) => {
      subscriber.update(this);
    });
  }

  mainBusinessLogic(newBook: IBook): void {
    this.state.push({ ...newBook, id: uuid() });

    this.notifySubscribers();
  }
}
