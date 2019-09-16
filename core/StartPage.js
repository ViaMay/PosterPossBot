import Base from './Base'

class StartPage extends Base {
    constructor() {
        super();
    }
    // get toComeInButton () { return browser.element("//*[@text='Войти через Poster']"); };
    // get toComeInButton () { return browser.element("//*[@class='android.widget.ImageView']"); };
    get toComeInButton () { return browser.element("//*[contains(@text,'Poster')]"); };

    waitVisible ()  {
        this.toComeInButton.waitForExist(30000);
        this.toComeInButton.waitForVisible();
        this.toComeInButton.waitForEnabled();
    }
}

export default new StartPage()