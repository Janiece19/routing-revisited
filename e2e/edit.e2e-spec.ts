import { EditPage } from './edit.po';
import { browser, element, by } from 'protractor';

describe('angular-crud1 App', () => {
  let page: EditPage;

  beforeEach(() => {
    page = new EditPage();
  });



  fit("should be able to click on edit on the homepage and get to the edit-dept page", () => {
    browser.get("/home");
    let firstdept = page.getEditButton().first();
    let firstdeptt = element.all(by.css("tr"));
    let firstdeptText = firstdeptt.getText();
    let olddeptList = element.all(by.css("tr"));

    expect(olddeptList.count()).toEqual(4);

    // browser.pause(49152);
    firstdept.click();
    let inputFieldText = page.getEditTextBox().getAttribute("value");

    //  expect(firstdeptText).toBe(inputFieldText);
    page.getEditTextBox().sendKeys('and Hr');
    let UpdatedFieldText = page.getEditTextBox().getAttribute("value");
    page.getUpdateButton().click();
    expect(page.getHeadingText()).toEqual('Department');
    let editedInput = element.all(by.tagName('td')).first().getText();

    expect(editedInput).toEqual(UpdatedFieldText);

    let newdeptList = element.all(by.css("tr"));

    expect(newdeptList.count()).toEqual(4);



  })

  it("should not update department when entered department is invalid", () => {
    browser.get("/home");
    let firstdept = page.getEditButton().first();
    let firstdeptt = element.all(by.css("tr"));
    let firstdeptText = firstdeptt.getText();



    firstdept.click();
    let inputFieldText = page.getEditTextBox().getAttribute("value");

    //  expect(firstdeptText).toBe(inputFieldText);

    page.getEditTextBox().sendKeys('and Hr345');
    let errorMsg = element(by.css("div[name='pattern']")).getText();
    expect(errorMsg).toBeDefined();
    expect(page.getUpdateButton().isEnabled()).toBeFalsy();


    page.getCancelButton().click();

    expect(page.getHeadingText()).toEqual('Department');


  })


  it('should navigate to department when clicking on cancel', () => {
    browser.get('/edit/1')
    page.getCancelButton().click();
    //   browser.pause(49152);
    expect(page.getHeadingText()).toEqual('Department');


  })




});