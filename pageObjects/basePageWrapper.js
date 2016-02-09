
var Page = require('./basePage');

function PageWrapper (webdriver, url) {
  Page.call(this, webdriver, url);
}

PageWrapper.prototype = Object.create(Page.prototype);
PageWrapper.prototype.constructor = PageWrapper;

PageWrapper.prototype.inputUserName = function (username) {
  return this.sendKeysToElement({ id : 'user_email' }, username);
};

PageWrapper.prototype.inputPassword = function (password) {
  return this.sendKeysToElement({ id : 'user_password'}, password);
};

module.exports = PageWrapper;