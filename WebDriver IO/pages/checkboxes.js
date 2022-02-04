class CheckboxClass{

    getchckbox(){
        return $("//a[@href='/checkboxes']");
    }

    clickOnLink(){
      this.getchckbox().waitForDisplayed({ timeout: 10000 });
        this.getchckbox().click();
    }


    getCheckboxElement(){
        return $("//*[@id='checkboxes']/input[2]")
    }

    clickOnCheckBox(index){
        this.getCheckboxElement(index).waitForDisplayed({ timeout: 10000 });
        this.getCheckboxElement(index).click();
    }
}

module.exports = new CheckboxClass();