import { AppPage } from './app.po';
import { browser, element, by } from "protractor";

describe('angular-crud1 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  fit('should display elements in add department ', () => {
    page.navigateToAddDepartment();

    expect(page.getHeadingText()).toEqual('Add Department');
    expect(page.getCancelButton().isPresent()).toBeTruthy();
    expect(page.getSaveButton()).toBeTruthy();
    expect(page.getSaveButton().isEnabled()).toBeFalsy();
  });

  it("should be able to add a new department", () => {
    browser.get("/add");
    let department = element(
      by.css(" input[name='deptName']"));
    department.sendKeys('sales');
    let newDept = department.getAttribute("value");
    expect(page.getSaveButton().isEnabled()).toBeTruthy();
    page.getSaveButton().click();
    // browser.get("/home");
    let rowElements = element.all(by.css("tr"));
    expect(rowElements.count()).toEqual(5);
    let addedElement = element.all(by.css('tr')).last().getText();
    expect(addedElement).toEqual(newDept);

  })

  it('should throw error when entered department is empty ', () => {
    page.navigateToAddDepartment();
    let department = element(by.css(" input[name='deptName']"));
    department.sendKeys('');
    let errorMsg = element(by.css("div[name='required'")).getText();
    expect(errorMsg).toBeDefined();
    expect(page.getSaveButton().isEnabled()).toBeFalsy();
  })

  it('should throw error when entered department has characters other than letters ', () => {
    page.navigateToAddDepartment();
    let department = element(by.css(" input[name='deptName']"));
    department.sendKeys('2345');
    let errorMsg = element(by.css("div[name='pattern'")).getText();
    expect(errorMsg).toBeDefined();
    expect(page.getSaveButton().isEnabled()).toBeFalsy();
  })

  it('should navigate to department when clicking on cancel', () => {
    page.navigateToAddDepartment();
    page.getCancelButton().click();
    //   browser.pause(49152);
    expect(page.getHeadingText()).toEqual('Department');


  })


  it("should have save button be disabled initially", () => {
    browser.get("/add");
    expect(page.getSaveButton().isEnabled()).toEqual(false);


  })


  fit("should only enable save todo button when we start typing new department", () => {
    browser.get("/add");

    let newTodoInputField = element(by.css(".add-todo input[type=text]"));
    let department = element(by.css(" input[name='deptName']"));
    department.sendKeys("Marketing");

    expect(page.getSaveButton().isEnabled()).toEqual(true);
  })
});