var Page = require('./basePage');

/**
 * Create subclass of Page
 * @param {instance} webdriver
 * @constructor
 */
function LoginPage (webdriver) {
  Page.call(this, webdriver, 'https://core.futuresimple.com/sales/users/login');
}

/**
 * LoginPage extends Page class.
 * @type {Page}
 */
LoginPage.prototype = Object.create(Page.prototype);
LoginPage.prototype.constructor = LoginPage;

/**
 * Uses inherited {@link Page.sendKeysToElement}
 * to schedule a send keys command to an element.
 * Can be called separately.
 * @param {string} username
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LoginPage.prototype.inputUserName = function (username) {
  return this.sendKeysToElement({ id : 'user_email' }, username);
};

/**
 * Uses inherited {@link Page.sendKeysToElement}
 * to schedule a send keys command to an element.
 * Can be called separately.
 * @param {string} password
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LoginPage.prototype.inputPassword = function (password) {
  return this.sendKeysToElement({ id : 'user_password' }, password);
};

/**
 * Uses inherited {@link Page.clickElement}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LoginPage.prototype.clickSubmit = function () {
  return this.clickElement({ xpath : '//div[@class="controls"]/button' });
};

/**
 * Uses inherited {@link Page.sendKeysToElement} and {@link Page.clickElement}
 * to schedule a send keys and click commands to an element.
 * @param {string} username
 * @param {string} password
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LoginPage.prototype.login = function (username, password) {
  this.inputUserName(username);
  this.inputPassword(password);
  return this.clickSubmit();
};

module.exports = LoginPage;
