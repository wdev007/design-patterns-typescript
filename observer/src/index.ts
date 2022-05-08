import { BookStore } from "./entities/BookStore";
import { Customer } from "./entities/Customer";

const bookStore = new BookStore();
const maria = new Customer("Maria", "maria@gmail.com");
const jose = new Customer("José", "jose@gmail.com");

bookStore.mainBusinessLogic({
  title: "Livro 1",
  price: 10,
  author: "Desconhecido",
});

bookStore.subscribe(maria);

bookStore.mainBusinessLogic({
  title: "Livro 2",
  price: 10,
  author: "Desconhecido",
});

bookStore.subscribe(jose);

bookStore.mainBusinessLogic({
  title: "Livro 3",
  price: 10,
  author: "Desconhecido",
});
