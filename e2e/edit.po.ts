import { browser, by, element } from 'protractor';

export class EditPage {

    navigateToEditDepartment() {
        return browser.get('/edit');
      }
    
      getHeadingText() {
        return element(by.css('h1')).getText();
      }

      getUpdateButton() {
        return element(by.cssContainingText('button','Update Department'));
      }

      getCancelButton() {
        return element(by.css("app-edit-dept input[name='clearbtn']"));
      }

      getEditButton(){
          return element.all(by.css('input[name="edit"]'));
      }

      getEditTextBox(){
        return element(by.css("app-edit-dept input[type=text]"))
      }
    
}