import { browser, by, element } from 'protractor';

export class ViewPage {
    navigateTo() {
        return browser.get('/view-detail');
    }


    getHeadingText() {
        return element(by.css('h1')).getText();
    }


    getId() {
        return element(by.cssContainingText('div', 'Id')).$('span').getText();
    }

    getDepartmentName() {
        return element(by.css("input[name='departmentName']"));
    }

    getBackButton() {
        return element(by.cssContainingText('button', 'Back'));
    }

    getViewButton(){
          return element.all(by.css('input[name="view"]'));
      }

}
