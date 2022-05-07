import { IProduct, IDiscountStrategy } from ".";

export interface IShoppingCart {
  addProduct(...product: IProduct[]): void;
  getProducts(): IProduct[];
  getTotal(): number;
  getTotalWithDiscount(): number;
  setDiscount(discount: IDiscountStrategy): void;
}
