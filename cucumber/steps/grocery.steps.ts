import { defineSupportCode } from 'cucumber';
import { GroceryList } from './../../src/app/models/grocery-list.class';
import { expect } from 'chai';

defineSupportCode(({ Given, When, Then, Before }) => {
    let myList: any;
    const listItem = 'apple';
    let gl: GroceryList;


    Before(() => {
        gl = new GroceryList();
        myList = gl.create();
    });


    Given('I have an empty grocery list', () => {

        return expect(myList).to.not.be.a(null);
    });

    When('I add an item to the list', () => {
        // myList.add(listItem);
        return 'pending';
    });

    Then('The grocery list contains a single item', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    Then('I can access that item from the grocery list', function (callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });
    // const wiz1: MatkaWiz1PageObject = new MatkaWiz1PageObject();

    // Given(/^I am on first page for application "(.*?)"$/, (expectedTitle) => {
    //     browser.waitForAngular();

    //     const title = browser.getTitle();
    //     return expect2(title).to.eventually.equal(expectedTitle);
    // });
    // Then(/^The url contains "(.*?)"$/, (urlPartialExpected) => {
    //     const urlPartialActual = browser.getCurrentUrl();
    //     return expect2(urlPartialActual).to.eventually.contain(urlPartialExpected);
    // });
});