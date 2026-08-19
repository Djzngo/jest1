/**
 * @jest-enviroment jsdom
 */

// This line of code pulls the file that we are going to be testing our JS from
const buttonClick = require("../button")

// Pulls the tag that we want to test from the HTML file
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par"). innerHTML).toequal("Button Clicked");
    });
});

