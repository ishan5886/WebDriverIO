class HomePage{

    get pageheader() {return $('h1')}
    get subHeader(){ return $('div.banner-text-content>p.sub-text')}
    get supportLink() {return $("//a[text()='Support']")}

}

module.exports = new HomePage(); //outside Homepage class anyone can access the Homepage class