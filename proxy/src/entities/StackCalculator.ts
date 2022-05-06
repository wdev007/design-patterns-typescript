import { ICalculator } from "../interfaces/ICalculator";

export class StackCalculator implements ICalculator {
  private stack: number[];

  constructor() {
    this.stack = [];
  }

  clear(): void {
    this.stack = [];
  }

  divide(): number {
    const divisor = this.getValue();
    const dividend = this.getValue();
    const result = dividend / divisor;

    this.putValue(result);

    return result;
  }

  getValue(): number {
    return this.stack.pop();
  }

  multiply(): number {
    const multiplicand = this.getValue();
    const multiplier = this.getValue();
    const result = multiplier * multiplicand;

    this.putValue(result);

    return result;
  }

  peekValue(): number {
    return this.stack[this.stack.length - 1];
  }

  putValue(value: number): void {
    this.stack.push(value);
  }
}
