/**
 * Superclass
 * @param {instance} driver
 * @param {string} url
 * @constructor
 */
function Page(driver, url) {
  this.driver = driver;
  this.url = url;
}

/**
 * Opens page.
 * @returns {Page} instance
 */
Page.prototype.open = function() {
  this.driver.get(this.url);
  return this;
};

/**
 * Waits for element by specified locator
 * @param {Object} locator
 * @param {number=} timeout optional
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
 * Waits for element by specified locator, then pass it on.
 * @param {Object} locator
 * @returns {!webdriver.WebElement|WebElementPromise}
 * - promise that will be fulfilled when WebElement is found
 */
Page.prototype.element = function (locator) {
  this.waitFor(locator);
  return this.driver.findElement(locator);
};

/**
 * Schedules a click command on element specified by locator
 * @param {Object} locator
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise<void>}
 * A promise that will be resolved when
 * this command has completed.
 */
Page.prototype.findElementAndClick = function(locator) {
  return this.element(locator).click();
};

/**
 * Schedules a sendKeys command on element specified by locator
 * @param {Object} locator
 * @param {string} input
 * @returns {!webdriver.promise.Promise.<void>|webdriver.promise.Promise<void>}
 * a promise that will be resolved when the command has completed.
 */
Page.prototype.setElementText = function(locator, input) {
  var element = this.element(locator);
  return element.clear().then(element.sendKeys(input));
  //return element.sendKeys(input);
};

module.exports = Page;
