import { EditPage } from './edit.po';
import { browser, element, by } from 'protractor';

describe('angular-crud1 App', () => {
  let page: EditPage;

  beforeEach(() => {
    page = new EditPage();
  });

  it('should display elements in edit department ', () => {
    page.navigateToEditDepartment();
   
    expect(page.getHeadingText()).toEqual('Add Department');
    expect(page.getCancelButton().isPresent()).toBeTruthy();
    expect(page.getSaveButton()).toBeTruthy();
  });

  fit("should be able to click on a todo on the homepage and get to the details page", () => {  
      browser.get("/home");
      let firstdept = page.getEditButton().first();
      let firstdeptText = element.all(by.css("tr")).first().getText();
  browser.pause();
      firstdept.click();
      let inputFieldText = element(
            by.css("app-edit-dept input[type=text]")).getAttribute("value");
  
      expect(inputFieldText).toEqual(firstdeptText);
  })
});