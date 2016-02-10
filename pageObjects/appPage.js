var Page = require('./basePage');

function AppPage (webdriver) {
  Page.call(this, webdriver, 'https://app.futuresimple.com/sales');
}

AppPage.prototype = Object.create(Page.prototype);
AppPage.prototype.constructor = AppPage;

AppPage.prototype.checkUrl = function () {
  return this.driver.getCurrentUrl().then(function (url) {
    console.log(url);
  });
};

AppPage.prototype.clickLeads = function () {
  return this.clickElement({ id : 'nav-leads' });
};

module.exports = AppPage;

