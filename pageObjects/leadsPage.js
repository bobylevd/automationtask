var Page = require('./basePage');

function LeadsPage (webdriver) {
  Page.call(this, webdriver, 'https://app.futuresimple.com/leads');
}

LeadsPage.prototype = Object.create(Page.prototype);
LeadsPage.prototype.constructor = LeadsPage;

LeadsPage.prototype.createNewLead = function () {
  return this.clickElement({ id : 'leads-new' });
};

LeadsPage.prototype.fillForm = function (info) {
  formInfo = info || {
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
  this.sendKeysToElement({ id : 'lead-first-name' }, formInfo.name);
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
  this.clickElement({ xpath : '//button[contains(@class, "save")]' });
  this.driver.sleep(5000);
  return this;
};

module.exports = LeadsPage;

