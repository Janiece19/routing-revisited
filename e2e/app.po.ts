import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/home');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  navigateToDepartment() {
    return browser.get('/home');
  }

  navigateToAddDepartment() {
    return browser.get('/add');
  }

  getHeadingText() {
    return element(by.css('h1')).getText();
  }

  getButton() {
    return element(by.css('app-department input[name="add"]')).isPresent();
  }


  getCancelButton() {
    return element(by.css("app-add-department input[type=button]"));
  }

  getTable() {
    return element(by.css('app-department table'))
  }

  getSaveButton() {
    return element(by.cssContainingText('button', 'Save Department'));
  }


  getDeleteButton() {
    return element.all(by.css('input[name="delete"]'));
  }

}
