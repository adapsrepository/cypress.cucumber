import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to Orange HRM page', () => {
    return cy.visit('https://opensource-demo.orangehrmlive.com/');
})

Given('I navigate to Orange HRM page with required login', () => {
    return cy.login();
})

And('I enter username {string}', (username) => {
    return cy.get('input[name=txtUsername]').type(username).should('have.value', username);
});

And('I enter password {string}', (password) => {
    return cy.get('input[name=txtPassword]').type(password).should('have.value', password);
});

When('I click on Login button', () => {
    return cy.get('input[value=LOGIN]').click();
});

Then('I validate home page', () => {
    return cy.get('input[value="Subscribe"]',{timeout:50000}).should('be.visible');
});



// And('I enter car model {string} in home page filter and validate length {string} of search results with element {string}', (carModel, length, element) => {
//     var len = Number(length)
//     return cy.get("input[placeholder*='Search by']").clear().type(carModel).wait(3000).then(() => {
//         cy.get(element).its('length').should('eq', len)
//     })
// });

// And('I enter car model {string} in home page filter and select the required option {string} in search results with element {string}', (carModel, option, element) => {
//     var len = Number(length)
//     return cy.get("input[placeholder*='Search by']").clear().type(carModel).wait(3000).then(() => {
//         cy.get(element).each(($option, index) => {
//             cy.log($option.text())
//             if ($option.text() == option) {
//                 cy.wrap($option).click();
//             }
//         })
//     })
// });