"use strict";

var test = require('selenium-webdriver/testing');
var LoginPage = require('../pageObjects/loginPage');
var AppPage = require('../pageObjects/appPage');
var LeadsPage = require('../pageObjects/leadsPage');
var SettingsPage = require('../pageObjects/settingsPage');
var assert = require('chai').assert;

test.describe('BaseCRM Test', function () {

  var loginPage;
  var appPage;
  var leadsPage;
  var settingsPage;

  var driver;

  this.timeout(25000); // general test timeout.

  test.before(function () {
    driver = require('./driver').getDriver();
  });

  test.after(function () {
    if(driver) {
      driver.quit();
    }
  });

  test.it('Open login page and input username and password', function () {
    loginPage = new LoginPage(driver);
    loginPage.open();
    loginPage.login('dimster-od@yandex.ru', '236754');
    appPage = new AppPage(driver);
    appPage.clickLeads();
  });

  test.it('Create new lead and check its status', function () {
    leadsPage = new LeadsPage(driver);
    leadsPage.createNewLead();
    leadsPage.fillForm();
    leadsPage.setCountry();
    leadsPage.submitForm();
    leadsPage.getLeadStatusText()
      .then(function (text) {
        assert.equal(text, 'New');
      });
  });

  test.it('Open first lead on page and check its status', function () {
    leadsPage = new LeadsPage(driver);
    leadsPage.open();
    leadsPage.openLastLead();
    leadsPage.getLeadStatusText()
      .then(function (text) {
        assert.equal(text, 'New');
      })
  });

  test.it('Changes lead status name in settings', function () {
    leadsPage.openSettings();
    settingsPage = new SettingsPage(driver);
    settingsPage.openLeadsSettings();
    settingsPage.openLeadStatuses();
    settingsPage.editLeadStatus();
    settingsPage.editLeadStatusName('New-lead-text');
    settingsPage.saveLeadStatusName();
  });

  test.it('Check that new lead status is in place', function () {
    leadsPage = new LeadsPage(driver);
    leadsPage.open();
    leadsPage.openLastLead();
    leadsPage.getLeadStatusText()
      .then(function (text) {
        assert.equal(text, 'New-lead-text');
      });
  });
});