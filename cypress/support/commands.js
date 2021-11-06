// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add('login', () => {
    cy.intercept('**/dashboard/employeeDistribution').as('dashboard');

    cy.visit(Cypress.env('baseUrl'));
    cy.get('input[name=txtUsername]').type(Cypress.env('username')).should('have.value', Cypress.env('username'));
    cy.get('input[name=txtPassword]').type(Cypress.env('password')).should('have.value', Cypress.env('password'));
    cy.get('input[value=LOGIN]').click();
    
    cy.wait('@dashboard');
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
