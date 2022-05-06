import { StackCalculator } from "./entities/StackCalculator";

const calculator = new StackCalculator();

calculator.putValue(10);
calculator.putValue(2);

console.log(calculator.divide());

console.log("----------------------------");

calculator.putValue(10);
calculator.putValue(0);

console.log(calculator.divide());
