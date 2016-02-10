var Page = require('./basePage');

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

LoginPage.prototype.login = function (username, password) {
  this.inputUserName(username);
  this.inputPassword(password);
  this.clickSubmit();
  return this;
};

module.exports = LoginPage;
