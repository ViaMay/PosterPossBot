import startPage from './StartPage';
import Base from './Base';
import loginCompanyPage from './LoginCompanyPage';
import loginPage from './LoginPage';
import salePage from './SalePage';
import calendarPage from './CalendarPage';


describe('script', () => {
  it('script',() => {
      let now = new Date();
      let day = now.getDate();
      let year = now.toLocaleString("en-US", {year: 'numeric'});
      // let month = now.toLocaleString("en-US", {month: 'long'});
      let month = Base.getMonth(now.getMonth());

      startPage.waitVisible();
      startPage.toComeInButton.click();
      loginCompanyPage.waitVisible();
      loginCompanyPage.companyId.setValue(Base.company);
      browser.hideDeviceKeyboard();
      browser.pause(2000);
      loginCompanyPage.companyButton.click();
      loginPage.waitVisible();
      loginPage.email.setValue(Base.email);
      browser.hideDeviceKeyboard();
      browser.pause(2000);
      loginPage.password.setValue(Base.password);
      browser.hideDeviceKeyboard();
      browser.pause(2000);
      loginPage.loginInButton.click();
      salePage.waitVisible();

      salePage.calendarButton.click();
      calendarPage.waitVisible();
      if (day < 7)
      {
          calendarPage.getFirstElement(day, month, year).waitForVisible();
          calendarPage.getFirstElement(day, month, year).click();
      }
      else {
          calendarPage.getLestElement(day, month, year).waitForVisible();
          calendarPage.getLestElement(day, month, year).click();
      }
      calendarPage.okButton.click();
      salePage.waitVisible();
      browser.pause(2000);
      browser.saveScreenshot('./snapshots/snapshot1.png');
      Base.sendPhoto( './snapshots/snapshot1.png');

      salePage.calendarButton.click();
      calendarPage.waitVisible();
      calendarPage.getFirstElement('1', month, year).waitForVisible();
      calendarPage.getFirstElement('1', month, year).click();
      if (day < 7)
      {
          calendarPage.getFirstElement(day, month, year).waitForVisible();
          calendarPage.getFirstElement(day, month, year).click();
      }
      else {
          calendarPage.getLestElement(day, month, year).waitForVisible();
          calendarPage.getLestElement(day, month, year).click();
      }
      calendarPage.okButton.click();
      browser.pause(2000);
      salePage.waitVisible();
      browser.saveScreenshot('./snapshots/snapshot2.png');
      Base.sendPhoto( './snapshots/snapshot2.png');
  });
});

