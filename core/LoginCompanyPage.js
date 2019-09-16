import Base from './Base'

class LoginCompanyPage extends Base {
    constructor() {
        super();
    }
    // get title () { return browser.element("//*[@text='*Poster']"); };
    get title () { return browser.element("//*[contains(@text,'Poster')]"); };
    get companyId () { return browser.element("//*[@resource-id='company_id']"); };
    get companyButton () { return browser.element("//*[@text and @class='android.widget.Button']"); };

    waitVisible ()  {
        this.title.waitForVisible(30000);
        this.title.waitForEnabled();
        this.companyId.waitForVisible(30000);
        this.companyId.waitForEnabled();
        this.companyButton.waitForVisible(30000);
        this.companyButton.waitForEnabled();
    }
}

export default new LoginCompanyPage()