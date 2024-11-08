import Calculator from "./Calculator";

test("Does it exist?", () => {
    expect(Calculator()).toBeDefined();
})

//addition
test("Can you add?", () => {
    expect(Calculator().add(1, 1)).toBe(2);
})

test("Can you add negative numbers?", () => {
    expect(Calculator().add(-100, 2)).toBe(-98);
})

test("Can you add 2 negative numbers?", () => {
    expect(Calculator().add(-100, -4)).toBe(-104);
})

test("Don't add 2 non-numbers", () => {
    expect(() => Calculator().add("-100", true)).toThrow(Error);
})

//subtraction
test("Can you subtract?", () => {
    expect(Calculator().subtract(1, 1)).toBe(0);
})

test("Can you subtract negative numbers?", () => {
    expect(Calculator().subtract(-100, 2)).toBe(-102);
})

test("Can you subtract 2 negative numbers?", () => {
    expect(Calculator().subtract(-100, -4)).toBe(-96);
})

test("Don't subtract 2 non-numbers", () => {
    expect(() => Calculator().subtract("-100", true)).toThrow(Error);
})

//multiplication

test("Can you multiply?", () => {
    expect(Calculator().multiply(1, 1)).toBe(1);
})

test("Can you multiply negative numbers", () => {
    expect(Calculator().multiply(-100, 2)).toBe(-200);
})

test("Can you multiply 2 negative numbers?", () => {
    expect(Calculator().multiply(-100, -4)).toBe(400);
})

test("Don't multiply 2 non-numbers", () => {
    expect(() => Calculator().multiply("-100", true)).toThrow(Error);
})

//division

test("Can you divide?", () => {
    expect(Calculator().divide(1, 1)).toBe(1);
})

test("Can you divide negative numbers?", () => {
    expect(Calculator().divide(-100, 2)).toBe(-50);
})

test("Can you divide 2 negative numbers?", () => {
    expect(Calculator().divide(-100, -4)).toBe(25);
})

test("Don't divide 2 non-numbers", () => {
    expect(() => Calculator().divide("-100", true)).toThrow("One or more numbers are invalid!");
})

test("Don't divide by Zero!", () => {
    expect(() => Calculator().divide(2, 0)).toThrow("Don't Divide by Zero!");
})