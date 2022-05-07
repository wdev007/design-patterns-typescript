import { IShoppingCart } from ".";

export interface IDiscountStrategy {
  discount: number;
  getDiscount(cart: IShoppingCart): number;
}
