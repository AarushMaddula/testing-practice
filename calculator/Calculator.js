export default function() {
    const add = function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") throw new Error("One or more numbers are invalid!");
        return num1 + num2;
    }

    const subtract = function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") throw new Error("One or more numbers are invalid!");
        return num1 - num2;
    }

    const multiply = function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") throw new Error("One or more numbers are invalid!");
        return num1 * num2;
    }

    const divide = function(num1, num2) {
        if (typeof num1 !== "number" || typeof num2 !== "number") throw new Error("One or more numbers are invalid!");
        if (num2 === 0) throw new Error("Don't Divide by Zero!");
        return num1 / num2;
    }

    return {
        add,
        subtract,
        multiply,
        divide
    }
}