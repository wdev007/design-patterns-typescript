"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCalculatorProxy = void 0;
class StackCalculatorProxy {
    constructor(calculator) {
        this.calculator = calculator;
    }
    clear() {
        this.calculator.clear();
    }
    divide() {
        const divisor = this.calculator.peekValue();
        if (divisor === 0) {
            throw new Error("Divisão por zero");
        }
        return this.calculator.divide();
    }
    getValue() {
        return this.calculator.getValue();
    }
    multiply() {
        return this.calculator.multiply();
    }
    peekValue() {
        return this.calculator.peekValue();
    }
    putValue(value) {
        this.calculator.putValue(value);
    }
}
exports.StackCalculatorProxy = StackCalculatorProxy;
//# sourceMappingURL=StackCalculatorProxy.js.map