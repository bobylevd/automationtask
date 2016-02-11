
var Page = require('./basePage');

function SettingsPage (webdriver) {
  Page.call(this, webdriver, 'https://app.futuresimple.com/settings/profile');
}

SettingsPage.prototype = Object.create(Page.prototype);
SettingsPage.prototype.constructor = SettingsPage;

SettingsPage.prototype.openLeadsSettings = function () {
  return this.clickElement({ xpath : '//a[@href="/settings/leads"]' });
};

SettingsPage.prototype.openLeadStatuses = function () {
  return this.clickElement({ xpath : '//a[@href="#lead-status"]' });
};

/**
 *
 * @param text
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
SettingsPage.prototype.editLeadStatus = function () {
  return this.clickElement({ xpath : '(//button[text()="Edit"])[1]' });
};

SettingsPage.prototype.editLeadStatusName = function (text) {
  return this.sendKeysToElement({ css : '.named-objects-lead #name' }, text);
};

SettingsPage.prototype.saveLeadStatusName = function () {
  return this.clickElement({ xpath : '(//button[text()="Save"])[4]' });
};

module.exports = SettingsPage;

