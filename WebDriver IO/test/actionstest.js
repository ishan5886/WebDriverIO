const spicejetPage = require("../pages/actions.page");

describe("page actions - MoveToElement", function(){

    it("move to element",function(){

        browser.url("https://www.spicejet.com/");
        browser.maximizeWindow();
        spicejetPage.moveToElement(spicejetPage.parent);
        spicejetPage.moveToElement(spicejetPage.child1);
        spicejetPage.moveToElement(spicejetPage.child2);
        browser.pause(5000);

    });
});


describe("page actions", function(){

    it("move to element",function(){

        browser.url("https://the-internet.herokuapp.com/key_presses?");
        browser.maximizeWindow();
        spicejetPage.enterSearch("Tab");
        const text = spicejetPage.getKeyResultText();
        console.log(text);
        browser.pause(5000);

    });
});

