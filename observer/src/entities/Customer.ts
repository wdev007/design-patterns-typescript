import { v4 as uuid } from "uuid";
import { IBook, IContext, ISubscriber } from "../interfaces";

export class Customer implements ISubscriber {
  id: string;

  constructor(private name: string, private email: string) {
    this.id = uuid();

    console.log(
      `Cliente {id: ${this.id}, name: ${name}, email: ${email}} foi criado...\n`
    );
  }

  update(context: IContext<IBook>): void {
    console.log(
      `O cliente ${this.name} recebeu notificação do livro '${
        context.state[context.state.length - 1].title
      }' \n`
    );
  }
}
