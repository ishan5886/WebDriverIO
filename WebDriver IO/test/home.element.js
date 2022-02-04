const homePage =  require("../pages/homepage")

describe("homepage element handle", () => {

  it("verify home page elements", async () =>
  
  {

      await browser.url("https://www.freshworks.com/");
      await browser.maximizeWindow();
      await browser.pause(5000);
      let h1text = await homePage.pageheader.getText();
      console.log(h1text);

      let h2text = await homePage.subHeader.getText();
      console.log(h2text);

      suplink = await homePage.supportLink.click

      browser.pause(5000);



  }) 
})