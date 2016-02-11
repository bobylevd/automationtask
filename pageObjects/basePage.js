"use strict";

var fs = require('fs');
var assert = require('chai').assert;
var until = require('selenium-webdriver').until;
var NoSuchElementError = require('selenium-webdriver').error;

/**
 *
 * @param driver
 * @param url
 * @constructor
 */
function Page(driver, url) {
  this.driver = driver;
  this.url = url;
}

/**
 *
 * @returns {Page}
 */
Page.prototype.open = function() {
  this.driver.get(this.url);
  return this;
};

/**
 * Waits for element by specified locator
 * @param {object} locator
 * @param {number=} timeout
 * @returns {webdriver.promise.Promise<T>}
 */
Page.prototype.waitFor = function(locator, timeout) {
  var waitTimeout = timeout || 15000;
  var driver = this.driver;
  return driver.wait(function() {
    return driver.isElementPresent(locator);
  }, waitTimeout, 'Wait timeout for locator: ' + JSON.stringify(locator));
};

/**
 *
 * @param locator
 * @returns {!webdriver.WebElement|WebElementPromise}
 */
Page.prototype.element = function (locator) {
  this.waitFor(locator);
  return this.driver.findElement(locator);
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
  var element = this.element(locator);
  element.clear();
  return element.sendKeys(input);
};

/**
 *
 * @returns {Promise<R>}
 */
Page.prototype.getProgressBarAttr = function () {
  var progressbar = this.element({ id : 'feedback-progress' });
  this.driver.wait(until.elementIsVisible(progressbar), 2000);
  return progressbar.getAttribute('class').then(function (attr) {
    if (attr === 'hide') {
      return true;
    }
    return false;
  });
};

/**
 *
 * @returns {Promise<T>|webdriver.promise.Promise<T>|!webdriver.promise.Promise.<T>|!promise.Promise.<T>}
 */
Page.prototype.waitForProgressBar = function () {
  return this.driver.wait(this.getProgressBarAttr(), 3000);
};

module.exports = Page;
