"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackCalculator = void 0;
class StackCalculator {
    constructor() {
        this.stack = [];
    }
    clear() {
        this.stack = [];
    }
    divide() {
        const divisor = this.getValue();
        const dividend = this.getValue();
        const result = dividend / divisor;
        this.putValue(result);
        return result;
    }
    getValue() {
        return this.stack.pop();
    }
    multiply() {
        const multiplicand = this.getValue();
        const multiplier = this.getValue();
        const result = multiplier * multiplicand;
        this.putValue(result);
        return result;
    }
    peekValue() {
        return this.stack[this.stack.length - 1];
    }
    putValue(value) {
        this.stack.push(value);
    }
}
exports.StackCalculator = StackCalculator;
//# sourceMappingURL=StackCalculator.js.map