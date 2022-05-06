import { StackCalculator } from "./entities/StackCalculator";
import { StackCalculatorProxy } from "./entities/StackCalculatorProxy";

const calculator = new StackCalculator();
const calculatorProxy = new StackCalculatorProxy(calculator);

calculator.putValue(10);
calculator.putValue(2);

console.log(calculator.divide());

console.log("--------- divisão por zero sem o proxy --------------");

calculator.putValue(10);
calculator.putValue(0);

console.log(calculator.divide());

console.log("--------- divisão por zero com o proxy --------------");

calculatorProxy.putValue(10);
calculatorProxy.putValue(0);

console.log(calculatorProxy.divide());
