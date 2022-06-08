
import loc from '../support/locators.js';
import credential from '../fixtures/credentials.json';

{

    Cypress.Commands.add('login', (email, password) => {
        cy.visit('http://automationpractice.com')
        cy.get('.login').click()         
        cy.get(loc.login.email).type(credential.emailLogin)
        cy.get(loc.login.password).type(credential.passwordLogin)
        cy.get(loc.login.singin).click()

    })
    Cypress.Commands.add('contactUs', (email, password) => {
        cy.login()
        cy.get(loc.formContact.contactUs).click()
         
    })
    

}


  