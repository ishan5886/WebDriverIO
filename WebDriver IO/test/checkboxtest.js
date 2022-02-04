const checkboxpage = require("../pages/checkboxes");


describe("handling checkboxes", () =>{

  it("verify checkbox elements", async () => {

    await browser.url("http://the-internet.herokuapp.com/");
    await browser.maximizeWindow();
    await browser.pause(10000);

    await checkboxpage.clickOnLink();
    await browser.pause(5000);

    //checkboxpage.getCheckboxElement();
    await checkboxpage.clickOnCheckBox();
    await browser.pause(5000);

    await expect(checkboxpage.getCheckboxElement().isSelected()).equals(true);
    await browser.pause(5000);


  });

});

// npm test -- --spec ./test/filename.js