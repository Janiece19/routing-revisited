
import { ViewPage } from "./view.po";
import { browser, element, by } from "protractor/built";

describe('angular-crud1 App', () => {
    let page: ViewPage;

    beforeEach(() => {
        page = new ViewPage();
    });

    it("should be able to click on viewdetail on the homepage and get to the view-detail page", () => {
        browser.get("/home");
        let firstdeptt = element.all(by.css("tr")).get(2);
        let firstdept = page.getViewButton().get(1);
        let firstdeptText = firstdeptt.getText();
       
        firstdept.click();
        let inputFieldText = element(
            by.css("app-department-detail input[type=text]")).getAttribute("value");
        expect(page.getHeadingText()).toEqual(inputFieldText);
        expect(page.getId()).toEqual('2');
        expect(inputFieldText).toEqual(firstdeptText);

        page.getBackButton().click();
        expect(page.getHeadingText()).toEqual('Department');

    })


    fit('should navigate to department when clicking on back', () => {
        browser.get('view-detail')
        page.getBackButton().click();
        //   browser.pause(49152);
        expect(page.getHeadingText()).toEqual('Department');


    })
});
