/**
 * @jest-environment jsdom
 */

const addtion = require('../calc');

describe("Calculator", () => {
    describe("Addition function", () => {
        test("Should return 42 for 20 + 22", () => {
            expect(addtion(20, 22)).toBe(42);
        });
        test("Should return 73 for 42 + 31", () => {
            expect(addtion(42, 31)).toBe(73);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
});