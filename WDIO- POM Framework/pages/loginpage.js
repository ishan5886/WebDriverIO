const { default: $ } = require("webdriverio/build/commands/browser/$")

const elementUtil = require('../util/elementUtil');
const constData = require('../constants');

class LoginPage{

    //page locators
    get email() { return $('#Email') }
    get password() { return $('#Password')}
    get loginBtn() { return $("//button[@class='button-1 login-button']")}


    getPageTitle(){
        return elementUtil.doGetPageTitle(constData.LOGIN_PAGE_TITLE)
    }

    doLogin(emailID, pwd){
        elementUtil.doSetValue(this.email, emailID)
        browser.pause(3000)
        elementUtil.doSetValue(this.password, pwd)
        browser.pause(2000)
        elementUtil.doClick(this.loginBtn)


    }  

}

module.exports = new LoginPage()