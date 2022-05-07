import { IDiscountStrategy, IShoppingCart } from "../interfaces";

export class BlackFridayDiscount implements IDiscountStrategy {
  discount: number = 0;

  getDiscount(cart: IShoppingCart): number {
    const total = cart.getTotal();

    if (total >= 50) {
      this.discount = 40;
    }

    return total - total * (this.discount / 100);
  }
}
