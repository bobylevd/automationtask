var Page = require('./basePage');
var AppPage = require('./appPage');

function LoginPage (webdriver) {
  Page.call(this, webdriver, 'https://core.futuresimple.com/sales/users/login');
}

LoginPage.prototype = Object.create(Page.prototype);
LoginPage.prototype.constructor = LoginPage;

LoginPage.prototype.inputUserName = function (username) {
  return this.sendKeysToElement({ id : 'user_email' }, username);
};

LoginPage.prototype.inputPassword = function (password) {
  return this.sendKeysToElement({ id : 'user_password' }, password);
};

LoginPage.prototype.clickSubmit = function () {
  return this.clickElement({ xpath : '//div[@class="controls"]/button' });
};

/**
 *
 * @param username
 * @param password
 * @returns {LoginPage}
 */
LoginPage.prototype.login = function (username, password) {
  this.inputUserName(username);
  this.inputPassword(password);
  return this.clickSubmit();
};

//LoginPage.prototype.openNext = function () {
//  return new AppPage(this.driver);
//};

module.exports = LoginPage;
