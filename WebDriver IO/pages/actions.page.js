class SpiceJet{
    get parent(){return $('#ctl00_HyperLinkLogin');}
    get child1() {return $('=SpiceClub Members')}
    get child2() {return $('=Member Login')}

    get keysearch(){return $('#target')}
    get keyresult(){return $('#result')}

    getKeyResultText(){
        return this.keyresult.getText();
    }

    enterSearch(text){
        this.keysearch.setValue(text);
    }

    moveToElement(element){element.waitForDisplayed(); element.moveTo();}
    clickElement(element){element.click();}
}

module.exports = new SpiceJet();