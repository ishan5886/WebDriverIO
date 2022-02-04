const blazeisdisplayedpage = require("../pages/blazeisdisplayedpage");


describe("blazepage element handle", function(){

  it("verify home page elements", function(){

      browser.url("https://www.blazemeter.com/");
      browser.maximizeWindow();
    //   browser.pause(5000);
    //   let h1text = homePage.pageheader.getText();
    //   console.log(h1text);

    //   let h2text = homePage.subHeader.getText();
    //   console.log(h2text);

    //   suplink = homePage.supportLink.click

    //   browser.pause(5000);

    console.log(blazeisdisplayedpage.mainHeader.isDisplayed());


      



  }) 
})