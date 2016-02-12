var Page = require('./basePage');

/**
 * Create subclass of Page
 * @param {instance} webdriver
 * @constructor
 */
function SettingsPage (webdriver) {
  Page.call(this, webdriver, 'https://app.futuresimple.com/settings/profile');
}

/**
 * SettingsPage extends Page class.
 * @type {Page}
 */
SettingsPage.prototype = Object.create(Page.prototype);
SettingsPage.prototype.constructor = SettingsPage;

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
SettingsPage.prototype.openLeadsSettings = function () {
  return this.findElementAndClick({ xpath : '//a[@href="/settings/leads"]' });
};

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
SettingsPage.prototype.openLeadStatuses = function () {
  return this.findElementAndClick({ xpath : '//a[@href="#lead-status"]' });
};

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
SettingsPage.prototype.editLeadStatus = function () {
  return this.findElementAndClick({ xpath : '(//button[text()="Edit"])[1]' });
};

/**
 * Uses inherited {@link Page.setElementText}
 * to schedule a send keys command to an element.
 * @param {string} text
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
SettingsPage.prototype.editLeadStatusName = function (text) {
  return this.setElementText({ css : '.named-objects-lead #name' }, text);
};

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
SettingsPage.prototype.saveLeadStatusName = function () {
  this.findElementAndClick({ xpath : '(//button[text()="Save"])[4]' });
  return this.waitFor({ xpath : '//p[text()="Lead Status saved!"]'});
};

module.exports = SettingsPage;

