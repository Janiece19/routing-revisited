import { browser, by, element } from 'protractor';

export class EditPage {

    navigateToEditDepartment() {
        return browser.get('/edit');
      }
    
      getHeadingText() {
        return element(by.css('h1')).getText();
      }

      getSaveButton() {
        return element(by.cssContainingText('button','Update Department'));
      }

      getCancelButton() {
        return element(by.css("app-edit-dept input[type=button]"));
      }

      getEditButton(){
          return element.all(by.css('app-edit-dept input[name="edit"]'));
      }
    
}