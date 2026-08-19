/**
 * @jest-enviroment jsdom
 */

// This line pulls function form source file.
const btnClick = require("../button");

// Pulls the element from the DOM.
beforeEach(() => {
    // this pulls singular element from the DOM.
    // document.body.innerHTML = "<p id='par'></p>";

    // this pulls entire HTML from the DOM.
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

});

describe("DOM tests", () => {
    test("expects p content to change", () => {
        btnClick();
        expect(document.getElementById("par").innerHTML).toEqual("Button Clicked");
    });
    test("Expect h1 to exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});

