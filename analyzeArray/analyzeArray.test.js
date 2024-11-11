import analyzeArray from "./analyzeArray.js";

test('Does it exist?', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toBeDefined();
})

test('Does it work?', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
    );
})

test('Does it still work?', () => {
    expect(analyzeArray([-12323, 8.4, 3, 4.23, 2, -6])).toEqual(
        {
            average: -2051.895,
            min: -12323,
            max: 8.4,
            length: 6
        }
    );
})


test('Does it work with nothing?', () => {
    expect(() => analyzeArray([-12323, "d", 3, 4.23, 2, -6])).toThrow(Error)
})