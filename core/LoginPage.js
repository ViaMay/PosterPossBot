import Base from './Base'

class LoginPage extends Base {
    constructor() {
        super();
    }

    get title () { return browser.element("//*[contains(@text,'Poster')]"); };
    get email () { return browser.element("//*[@resource-id='email']"); };
    get password () { return browser.element("//*[@resource-id='password']"); };
    get loginInButton () { return browser.element("//*[@text and @class='android.widget.Button']"); };

    waitVisible ()  {
        this.loginInButton.waitForVisible();
        this.loginInButton.waitForEnabled();
        this.email.waitForVisible();
        this.email.waitForEnabled();
        this.title.waitForVisible();
        this.title.waitForEnabled();
        this.password.waitForVisible();
        this.password.waitForEnabled();
    }
}

export default new LoginPage()