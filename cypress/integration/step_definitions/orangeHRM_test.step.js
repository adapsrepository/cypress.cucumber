import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { loginpage, homepage,assignleave } from '../../support/pageObjects/orangeHRMPages'

Given('I navigate to HRM page', () => {
    return cy.visit('https://opensource-demo.orangehrmlive.com/');
})

And('I enter username {string} in HRM', (username) => {
    return cy.get(loginpage.input.username).type(username).should('have.value', username);
});

And('I enter password {string} in HRM', (password) => {
    return cy.get(loginpage.input.password).type(password).should('have.value', password);
});

When('I click on Login button in HRM', () => {
    return cy.get(loginpage.button.loginButton).click();
});

Then('I click on button with text {string}', (text) => {
    return cy.contains(text, { timeout: 50000 }).click({ force: true });
});

Then('I validate subscriber link on home page', () => {
    return cy.get(homepage.links.subscriber).should('be.visible');
});

And('I select value {string} from Employee name auto suggest dropdown', (text) => {
    return cy.get(assignleave.input.employeename)
        .type(text)
        .get('.ac_results ul li')
        .eq(0)
        .click({ force: true });
});

And('I select value {string} from leave type dropdown', (text) => {
    return cy.get(assignleave.select.leavetype)
        .select(text);        
});

And('I click on view details link and validate pop up data', () => {
    return cy.get(assignleave.links.viewdetails)
        .click()
        .get('div[id=balance_details] h3')
        .contains('OrangeHRM - Leave Balance Details')
        .get('div[id=balance_details] input[id=closeButton]')
        .click();        
});

And('I select date from From Date date picker', () => {
    cy.log('Current Date', Cypress.moment().format('MM/DD/YYYY'))
    let currentDate = Cypress.moment().add(1,'days').format('DD/MM/YYYY');
    let futureDay = Math.abs(currentDate.split('/')[0]);
    cy.log(futureDay);
    cy.get(assignleave.datePicker.fromdate)
    .click()
    .get('td a')
    .contains(futureDay)
    .click();
});

And('I select date from To Date date picker', () => {
    cy.log('Current Date', Cypress.moment().format('MM/DD/YYYY'))
    let currentDate = Cypress.moment().add(2,'days').format('DD/MM/YYYY');
    let futureDay = Math.abs(currentDate.split('/')[0]);
    cy.log(futureDay);
    cy.get(assignleave.datePicker.todate)
    .click()
    .get('td a')
    .contains(futureDay)
    .click();
});

And('I click on assign button', () => {
    return cy.get(assignleave.button.assign)
        .click();        
});

And('I click on Ok button', () => {
    return cy.get('#confirmOkButton').click();        
});







