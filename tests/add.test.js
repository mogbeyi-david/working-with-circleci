const add = require('../src/add');


describe('Testing the Addition function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds -1 + -2 to equal -3', () => {
        expect(add(-1, -2)).toBe(-3);
    });
});