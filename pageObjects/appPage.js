var Page = require('./basePage');
var LeadsPage = require('./leadsPage');

function AppPage (webdriver) {
  Page.call(this, webdriver);
}

AppPage.prototype = Object.create(Page.prototype);
AppPage.prototype.constructor = AppPage;

//AppPage.prototype.checkUrl = function () {
//  return this.driver.getCurrentUrl().then(function (url) {
//    console.log(url);
//  });
//};


AppPage.prototype.clickLeads = function () {
  return this.clickElement({ id : 'nav-leads' });
  //return this;
};

//AppPage.prototype.openNext = function () {
//  return new LeadsPage(this.driver);
//};

module.exports = AppPage;

