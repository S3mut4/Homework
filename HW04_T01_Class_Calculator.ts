// Class Definition
class Calculator {
    addition(num1: number, num2: number): number {
        return num1 + num2
    }

    isGreater(num1: number, num2: number): boolean {
        // Simplification: The relational operator (>) already returns a boolean (true/false).
        return num1 > num2
        //if (num1 > num2) {
        //    return true
        //} else {
        //    return false
        //}
    }
}

// Verification
const calc = new Calculator()

console.log(calc.addition(5, 3))    // 8
console.log(calc.addition(-2, 10))  // 8

console.log(calc.isGreater(10, 5))  // true
console.log(calc.isGreater(3, 7))   // false
console.log(calc.isGreater(4, 4))   // false