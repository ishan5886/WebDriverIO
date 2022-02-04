class ElementUtil{

    doClick(element){
        element.waitForDisplayed()
        element.click()
    }


    doSetValue(element, value){
        element.waitForDisplayed()
        element.setValue(value)
    }

    doClearValue(element){
        element.clearValue()
    }

    doGetText(element){
        element.waitForDisplayed()
        return element.getText()
    }


    doIsDisplayed(element){
        element.waitForDisplayed()
        return element.isDisplayed()
    }
    doGetPageTitle(pageTitle){
        browser.waitUntil(function(){
            return(browser.getTitle() === pageTitle)
        }, 5000, 'title not displayed after given time'
        )
        return browser.getTitle()
    }
}

module.exports = new ElementUtil()