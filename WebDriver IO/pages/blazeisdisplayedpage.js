class BlazePage{

    get mainHeader() {return $('h2.home_title')}

}

module.exports = new BlazePage(); //outside Blazepage class anyone can access the Blazepage class

