import Base from './Base'

class CalendarPage extends Base {
    constructor() {
        super();
    }
    // get title () { return browser.element("//*[@text='Выберите даты']"); };
    get title () { return browser.element("//*[@class='android.widget.TextView' and @text]"); };
    get cancelButton () { return browser.element("//*[@class='android.widget.ImageButton']"); };
    get okButton () { return browser.element("//*[@content-desc='Готово']"); };

    waitVisible ()  {
        this.title.waitForVisible();
        this.cancelButton.waitForVisible();
        this.okButton.waitForVisible();
    };

    getLestElement(day, month, year)    {
        let elements = browser.elements("//*[@text='" + day + "' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='"+ month +" "+ year + "']]]");
        let count = elements.value.length;
        return elements.value[count - 1];
    }
    getFirstElement(day, month, year)    {
        return browser.element("//*[@text='" + day + "' and ./parent::*[(./preceding-sibling::* | ./following-sibling::*)[@text='"+ month +" "+ year + "']]]");
    }
}

export default new CalendarPage()