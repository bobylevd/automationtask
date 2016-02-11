var Page = require('./basePage');
var until = require('selenium-webdriver').until;

function LeadsPage (webdriver) {
  Page.call(this, webdriver, 'https://app.futuresimple.com/leads');
}

LeadsPage.prototype = Object.create(Page.prototype);
LeadsPage.prototype.constructor = LeadsPage;

LeadsPage.prototype.createNewLead = function () {
  return this.clickElement({ id : 'leads-new' });
};

LeadsPage.prototype.getLeadStatus = function () {
  return this.element({ xpath : '//span[@class="lead-status"]' });
};

LeadsPage.prototype.openLastLead = function () {
  return this.clickElement({ xpath : '(//a[@class="lead-name"])[1]' });
};


LeadsPage.prototype.openSettings = function () {
  this.clickElement({ xpath : '//a[@href="#user-dd"]' });
  return this.clickElement({ xpath : '//a[@href="/settings/profile"]' });
};

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

