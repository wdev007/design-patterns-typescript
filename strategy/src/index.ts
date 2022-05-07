import { BlackFridayDiscount } from "./entities/BlackFridayDiscount";
import { DefaultDiscount } from "./entities/DefaultDiscount";
import { ShoppingCart } from "./entities/ShoppingCart";

const shoppingCart = new ShoppingCart();
const defaultDiscount = new DefaultDiscount();
const blackFridayDiscount = new BlackFridayDiscount();

shoppingCart.addProduct(
  { name: "Camisa", price: 20 },
  { name: "Calça", price: 80 }
);

shoppingCart.setDiscount(defaultDiscount);

console.log("total sem desconto - ", shoppingCart.getTotal());

console.log(
  "total com desconto default - ",
  shoppingCart.getTotalWithDiscount()
);

shoppingCart.setDiscount(blackFridayDiscount);

console.log(
  "total com desconto Black Friday - ",
  shoppingCart.getTotalWithDiscount()
);
