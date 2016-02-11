var Page = require('./basePage');

/**
 * Create subclass of Page
 * @param {instance} webdriver
 * @constructor
 */
function LeadsPage (webdriver) {
  Page.call(this, webdriver, 'https://app.futuresimple.com/leads');
}

/**
 * LeadsPage extends Page class.
 * @type {Page}
 */
LeadsPage.prototype = Object.create(Page.prototype);
LeadsPage.prototype.constructor = LeadsPage;

/**
 * Uses inherited {@link Page.clickElement}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.createNewLead = function () {
  return this.clickElement({ id : 'leads-new' });
};

/**
 * Uses inherited {@link Page.element}
 * to find element on page.
 * @returns {!webdriver.WebElement|WebElementPromise}
 */
LeadsPage.prototype.getLeadStatus = function () {
  return this.element({ xpath : '//span[@class="lead-status"]' });
};

/**
 * Uses inherited {@link Page.clickElement}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.openLastLead = function () {
  return this.clickElement({ xpath : '(//a[@class="lead-name"])[1]' });
};

/**
 * Uses inherited {@link Page.clickElement}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.openSettings = function () {
  this.clickElement({ xpath : '//a[@href="#user-dd"]' });
  return this.clickElement({ xpath : '//a[@href="/settings/profile"]' });
};

/**
 * Uses inherited {@link Page.clickElement} and {@link Page.sendKeysToElement}
 * to schedule a click commands on an elements.
 * @param {Object=} info optional object to use for Lead creation.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.fillForm = function (info) {
  var formInfo = info || {
      firstname : 'dmitry',
      lastname : 'test',
      companyname : 'testcomp',
      title : 'mr',
      email : 'itsme@gmail.com',
      phone : '6505525252',
      adress : 'test street 123',
      city : 'Odessa',
      zip : '65000',
      state : 'Odessa'
    };
  this.sendKeysToElement({ id : 'lead-first-name' }, formInfo.firstname);
  this.sendKeysToElement({ id : 'lead-last-name' }, formInfo.lastname);
  this.sendKeysToElement({ id : 'lead-company-name' }, formInfo.companyname);
  this.sendKeysToElement({ id : 'lead-title' }, formInfo.title);
  this.sendKeysToElement({ id : 'lead-email' }, formInfo.email);
  this.sendKeysToElement({ id : 'lead-mobile' }, formInfo.phone);
  this.sendKeysToElement({ id : 'lead-street' }, formInfo.adress);
  this.sendKeysToElement({ id : 'lead-city' }, formInfo.city);
  this.sendKeysToElement({ id : 'lead-zip' }, formInfo.zip);
  this.sendKeysToElement({ id : 'lead-region' }, formInfo.state);
  this.clickElement({ xpath : '//span[text()="Select an Option"]' });
  this.clickElement({ xpath : '//li[text()="Ukraine"]'} );
  return this.clickElement({ xpath : '//button[contains(@class, "save")]' });
};

module.exports = LeadsPage;

