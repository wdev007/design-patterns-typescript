export interface IContext<T> {
  state: T[];
}

export interface ISubscriber {
  id: string;
  update(context: IContext<any>): void;
}
