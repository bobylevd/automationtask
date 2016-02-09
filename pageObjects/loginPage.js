var Page = require('./basePage');

function LoginPage (webdriver, url) {
  Page.call(this, webdriver, url);
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
  return this.clickElement({ xpath : '//div[@class="controls"]/button' })
}

module.exports = LoginPage;
