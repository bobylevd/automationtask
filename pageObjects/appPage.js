var Page = require('./basePage');

/**
 * Create subclass of Page
 * @param {instance} webdriver
 * @constructor
 */
function AppPage (webdriver) {
  Page.call(this, webdriver); //call Page constructor
}

/**
 * AppPage extends Page class.
 * @type {Page}
 */
AppPage.prototype = Object.create(Page.prototype);
AppPage.prototype.constructor = AppPage;

/**
 * Uses inherited {@link Page.clickElement}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
AppPage.prototype.clickLeads = function () {
  return this.clickElement({ id : 'nav-leads' });
};

module.exports = AppPage;

