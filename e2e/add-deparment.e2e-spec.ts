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
  });

  fit("should be able to add a new department", () => {  
    browser.get("/add");
    let department = element(
          by.css(" input[name='deptName']"));
    department.sendKeys('sales');
    expect(page.getSaveButton().isEnabled()).toBeTruthy();
    page.getSaveButton().click();
    // browser.get("/home");
    let rowElements = element.all(by.css("tr"));
    expect(rowElements.count()).toEqual(7);
    
})

 it('should throw error when entered department is empty ',()=>{
      page.navigateToAddDepartment();
       let department = element(by.css(" input[name='deptName']"));
    department.sendKeys('');
    let errorMsg=element(by.css("div[name='required'")).getText();
    expect(errorMsg).toBeDefined();
    expect(page.getSaveButton().isEnabled()).toBeFalsy();
  })

  it('should throw error when entered department has characters other than letters ',()=>{
      page.navigateToAddDepartment();
       let department = element(by.css(" input[name='deptName']"));
    department.sendKeys('2345');
    let errorMsg=element(by.css("div[name='pattern'")).getText();
    expect(errorMsg).toBeDefined();
    expect(page.getSaveButton().isEnabled()).toBeFalsy();
  })

  it('should navigate to department when clicking on cancel',()=>{
      page.navigateToAddDepartment();
      page.getCancelButton().click();
    //   browser.pause(49152);
      expect(page.getHeadingText()).toEqual('Department');
      

  })
});