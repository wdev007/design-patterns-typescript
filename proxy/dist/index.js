"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StackCalculator_1 = require("./entities/StackCalculator");
const StackCalculatorProxy_1 = require("./entities/StackCalculatorProxy");
const calculator = new StackCalculator_1.StackCalculator();
const calculatorProxy = new StackCalculatorProxy_1.StackCalculatorProxy(calculator);
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
//# sourceMappingURL=index.js.map