"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StackCalculator_1 = require("./entities/StackCalculator");
const calculator = new StackCalculator_1.StackCalculator();
calculator.putValue(10);
calculator.putValue(2);
console.log(calculator.divide());
console.log("----------------------------");
calculator.putValue(10);
calculator.putValue(0);
console.log(calculator.divide());
//# sourceMappingURL=index.js.map