import capitalize from "./capitalize.js";

test('Capitalize Me!', () => {
    expect(capitalize("hello")).toBe("Hello");
});
test('Capitalize Me, but with passion!', () => {
    expect(capitalize("hello!")).toBe("Hello!");
});
test('Capitalize Me, but with passion AND length!', () => {
    expect(capitalize("hello, kind sir!")).toBe("Hello, kind sir!");
});
test('Capitalize?', () => {
    expect(capitalize("")).toBe("");
});
test('Can\'t Capitalize me!', () => {
    expect(capitalize(2)).toBeNull();
});