const LoginPage = require('../pages/loginpage');
const elementUtil = require('../util/elementUtil');
const configData = require('../config');
const constData = require('../constants');
const { assert } = require('chai');

describe('Login Page Test', function(){

    it('verify login page title', function(){

        browser.url('/');
        browser.maximizeWindow();
        const loginPageTitle = LoginPage.getPageTitle()
        console.log('LoginPage Title is :-  ', loginPageTitle)

        //expect(loginPageTitle.getText()).equals(constData.LOGIN_PAGE_TITLE);
        assert.equal(constData.LOGIN_PAGE_TITLE, loginPageTitle, 'TITLE IS NOT FOUND')

    })

    it('Verify Login', function(){

        LoginPage.doLogin(configData.username, configData.password)
        browser.pause(5000)

        
        // const expcond = expect(elementUtil.doGetPageTitle(constData.DASHBOARD_PAGE_TITLE)).equals('Dashboard / nopCommerce administration')
            
        // if(expcond){

        //     console.log('TEST CASE PASSED........')
        // }    
    })
})