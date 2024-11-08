import reverseString from "./reverseString";

test("Reverse this word", () => {
    expect(reverseString("hello")).toBe("olleh");
});
test("Reverse this word with expression", () => {
    expect(reverseString("hello!")).toBe("!olleh");
});
test("Reverse this word with expression", () => {
    expect(reverseString("Hello! I am kamala trump.")).toBe(".pmurt alamak ma I !olleH");
});
test("Reverse?", () => {
    expect(reverseString("")).toBe("");
});
test("Don't Reverse", () => {
    expect(reverseString(2)).toBeNull();
});