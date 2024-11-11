import CaesarCipher from "./CaesarCipher.js";

test("Does it exist?", () => {
    expect(CaesarCipher()).toBeDefined();
})

test("Does it kinda work?", () => {
    expect(CaesarCipher().caesarCipher("abc", 1)).toBe("bcd");
})

test("Does it work with caps?", () => {
    expect(CaesarCipher().caesarCipher("AbC", 3)).toBe("DeF");
})

test("Does it work with punctuation?", () => {
    expect(CaesarCipher().caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!");
})

test("Does it work with numbers?", () => {
    expect(CaesarCipher().caesarCipher('H3ll0, W0r1d!', 3)).toBe("K3oo0, Z0u1g!");
})