"use strict";

var fs = require('fs');
var assert = require('chai').assert;

/**
 * Main test class that takes webdriver instance as argument
 * @param {instance} driver
 * @param {string} url
 * @constructor
 */
function Page(driver, url) {
  this.driver = driver;
  this.url = url;
}

/**
 * Opens page on test setUp
 * @returns {Page}
 */
Page.prototype.open = function() {
  this.driver.get(this.url);
  return this;
};


Page.prototype.getCurrentTitle = function () {
  return this.driver.getTitle()
};

/**
 * Waits for element by specified locator
 * @param {object} locator
 * @param {number} timeout
 * @returns {webdriver.promise.Promise<T>}
 */
Page.prototype.waitForElement = function (locator, timeout) {
  var waitTimeout = timeout || 10000;
  var driver = this.driver;
  return driver.wait(function() {
    driver.isElementPresent(locator);
  }, waitTimeout);
};

Page.prototype.waitForPageToLoad = function () {
  return this.driver.exe
}

/**
 * Find element by its locator
 * and checks that this element is enabled and displayed
 * @param {object} locator
 * @returns {!webdriver.WebElement|WebElementPromise} that will be resolved
 * when element is found and verified.
 */
Page.prototype.element = function (locator) {
  var element = this.driver.findElement(locator);
  if (element) {
    return element;
  }
  else {
    throw new Error ('Element is not displayed/enabled,\n ' +
      'supposed to be found by: ', locator)
  }
};

/**
 * Schedules a click on element by specified locator.
 * @param {object} locator
 * @returns {webdriver.promise.Promise<void>|!webdriver.promise.Promise.<void>}
 * a promise that will be resolved when the command has completed.
 */
Page.prototype.clickElement = function(locator) {
  return this.element(locator).click();
};

/**
 * Schedules a command on element specified by locator
 * @param {object} locator
 * @param {string} input
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise<void>}
 * a promise that will be resolved when the command has completed.
 */
Page.prototype.sendKeysToElement = function(locator, input) {
  return this.element(locator).sendKeys(input);
};

module.exports = Page;
