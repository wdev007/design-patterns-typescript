import { ICalculator } from "../interfaces";

export class StackCalculatorProxy implements ICalculator {
  constructor(private calculator: ICalculator) {}

  clear(): void {
    this.calculator.clear();
  }

  divide(): number {
    const divisor = this.calculator.peekValue();

    if (divisor === 0) {
      throw new Error("Divisão por zero");
    }

    return this.calculator.divide();
  }

  getValue(): number {
    return this.calculator.getValue();
  }

  multiply(): number {
    return this.calculator.multiply();
  }

  peekValue(): number {
    return this.calculator.peekValue();
  }

  putValue(value: number): void {
    this.calculator.putValue(value);
  }
}
