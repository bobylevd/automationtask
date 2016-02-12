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
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.createNewLead = function () {
  return this.findElementAndClick({ id : 'leads-new' });
};

/**
 * Uses inherited {@link Page.element}
 * to find element on page.
 * @returns {!webdriver.WebElement|WebElementPromise}
 */
LeadsPage.prototype.getLeadStatusText = function () {
  return this.element({ xpath : '//span[@class="lead-status"]' }).getText();
};

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.openLastLead = function () {
  return this.findElementAndClick({ xpath : '(//a[@class="lead-name"])[1]' });
  /*
   * ecountered a problem here. If there are >50 leads chromedriver won't click
   * on an element, and raise an error
   * Element is not clickable at point (148, 194). Other element would receive the click
   */
};

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.openSettings = function () {
  this.findElementAndClick({ xpath : '//a[@href="#user-dd"]' });
  return this.findElementAndClick({ xpath : '//a[@href="/settings/profile"]' });
};

/**
 * Uses inherited {@link Page.findElementAndClick} and {@link Page.setElementText}
 * to schedule a click commands on an elements.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.fillForm = function () {
  this.setElementText({ id : 'lead-first-name' }, formInfo.firstname);
  this.setElementText({ id : 'lead-last-name' }, formInfo.lastname);
  this.setElementText({ id : 'lead-company-name' }, formInfo.companyname);
  this.setElementText({ id : 'lead-title' }, formInfo.title);
  this.setElementText({ id : 'lead-email' }, formInfo.email);
  this.setElementText({ id : 'lead-mobile' }, formInfo.phone);
  this.setElementText({ id : 'lead-street' }, formInfo.adress);
  this.setElementText({ id : 'lead-city' }, formInfo.city);
  this.setElementText({ id : 'lead-zip' }, formInfo.zip);
  this.setElementText({ id : 'lead-region' }, formInfo.state);
};

var formInfo = {
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

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.setCountry = function () {
  this.findElementAndClick({ xpath : '//span[text()="Select an Option"]' }); //hack to open country dropdown.
  return this.findElementAndClick({ xpath : '//li[@data-option-array-index="5"]'} );
};

/**
 * Uses inherited {@link Page.findElementAndClick}
 * to schedule a click command on an element.
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise.<void>}
 */
LeadsPage.prototype.submitForm = function () {
  return this.findElementAndClick({ xpath : '//button[contains(@class, "save")]' });
};

module.exports = LeadsPage;

