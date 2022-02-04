const { default: $ } = require("webdriverio/build/commands/browser/$")

describe("dripdwn", function(){

    it("select value by text", function(){

        browser.url("http://the-internet.herokuapp.com/dropdown");
        browser.maximizeWindow();
        browser.pause(3000);
        // $('#dropdown').selectByVisibleText('Option 1');
        $('#dropdown').selectByIndex(1);

        // browser.selectByVisibleText('#dropdown','Option 1')
        browser.pause(3000);


    })

})