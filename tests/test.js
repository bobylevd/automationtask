"use strict";

var test = require('selenium-webdriver/testing');
var LoginPage = require('../pageObjects/loginPage');
var AppPage = require('../pageObjects/appPage');
var LeadsPage = require('../pageObjects/leadsPage');
var assert = require('chai').assert;

test.describe('BaseCRM Test', function () {

  var loginP;
  var appP;
  var leadsP;
  var driver;
  this.timeout(20000);

  test.before(function () {
    driver = require('./driver').getDriver();
  });

  test.after(function () {
    if(driver) {
      driver.quit();
    }
  });

  test.it('Login and inputs username and password', function () {
    loginP = new LoginPage(driver);
    loginP.open();
    loginP.login('dimster-od@yandex.ru', '236754');
  });

  test.it('Click leads on app page', function () {
    appP = new AppPage(driver);
    appP.checkUrl();
    driver.sleep(5000);
    appP.clickLeads();
  });

  test.it('Create new lead', function () {
    leadsP = new LeadsPage(driver);
    driver.sleep(5000);
    leadsP.createNewLead();
    leadsP.fillForm();
  })
});
