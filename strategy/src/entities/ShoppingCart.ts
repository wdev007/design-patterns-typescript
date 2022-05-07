import { IDiscountStrategy, IProduct, IShoppingCart } from "../interfaces";

export class ShoppingCart implements IShoppingCart {
  private _products: IProduct[] = [];
  private discountStrategy: IDiscountStrategy;

  addProduct(...products: IProduct[]): void {
    products.forEach((product) => this._products.push(product));
  }

  getProducts(): IProduct[] {
    return this._products;
  }

  getTotal(): number {
    return this._products.reduce((sum, product) => sum + product.price, 0);
  }

  getTotalWithDiscount(): number {
    return this.discountStrategy.getDiscount(this);
  }

  setDiscount(discount: IDiscountStrategy): void {
    this.discountStrategy = discount;
  }
}
