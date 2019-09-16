import Base from './Base'

class SalePage extends Base {
    constructor() {
        super();
    }
    // get saleButton () { return browser.element("//*[@text='Продажи']"); };
    get saleButton () { return browser.element("//*[@class='android.widget.TextView' and @text]"); };
    get calendarButton () { return browser.element("(//*[@class='android.view.ViewGroup' and ./parent::*[@class='android.widget.ScrollView']]/*/*[@text and ./parent::*[@class='android.view.ViewGroup']])[1]"); };

    waitVisible ()  {
        this.saleButton.waitForVisible();
        this.calendarButton.waitForVisible();
    }
}

export default new SalePage()