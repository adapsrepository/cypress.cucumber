import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { loginpage} from '../../../support/pageObjects/orangeHRMPages'

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