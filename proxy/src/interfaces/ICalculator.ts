export interface ICalculator {
  clear(): void;
  divide(): number;
  getValue(): number;
  multiply(): number;
  peekValue(): number;
  putValue(value: number): void;
}
