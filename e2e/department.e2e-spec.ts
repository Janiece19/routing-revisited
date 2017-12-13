import { AppPage } from './app.po';
import { browser, element, by } from "protractor";

describe('angular-crud1 App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display heading', () => {
    page.navigateToDepartment();
    expect(page.getHeadingText()).toEqual('Department');
  });
  it('should display add button', () => {
    page.navigateToDepartment();
    browser.pause();
    expect(page.getButton()).toEqual(true);
  });

  it('should display count of table rows', () => {
    browser.get("/home");
    let table=element(by.css('table'))
    let tableElements = element.all(by.css("tr"));
     let tableHeaders = element.all(by.css("th")).getText();
    expect(tableElements.count()).toEqual(4);
    expect(table).toBeDefined();

     expect(tableHeaders).toEqual([ 'Name', 'Action' ]);
 });

 




});
