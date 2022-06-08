/// <reference types="cypress" />

import loc from '../support/locators.js';
import credential from '../fixtures/credentials.json';
import { loginMessage } from '../support/data/messages/login.message';
import { formMessage } from '../support/data/messages/form.message';



describe("Test Session contact Us", () => {

    it('Send a message', () => {
        cy.contactUs()
        cy.get(loc.formContact.comboChose).select(loc.formContent.subjectContent)
        cy.get(loc.formContact.email).should('have.value', credential.emailLogin)
        cy.get(loc.formContact.orderReference).select(loc.formContent.orderContent)
        cy.get(loc.formContact.product).select(loc.formContent.produtContent)
        cy.get(loc.formContact.message).type('Form contact Test')
        cy.get(loc.formContact.send).click()
        cy.get('.alert').should('have.text', loginMessage.messageSuccessfully)
      });


      it('Validate Subject Hading field on contact form ', () => {
         cy.contactUs()
         cy.get(loc.formContact.email).should('have.value', credential.emailLogin)
         cy.get(loc.formContact.message).type('Form contact Test')
         cy.get(loc.formContact.send).click()
         cy.get('ol > li').should('have.text', formMessage.validateSubjectField)
       });

      it('Validate email field on contact form ', () => {
         cy.contactUs()
         cy.get(loc.formContact.comboChose).select(loc.formContent.subjectContent)
         cy.get(loc.formContact.email).clear().type(credential.invalidEmail)
         cy.get(loc.formContact.message).type('Form contact Test')
         cy.get(loc.formContact.send).click()
         cy.get('ol > li').should('have.text', formMessage.invalidEmail)
       });

       it('Validate message field on contact form ', () => {
         cy.contactUs()
         cy.get(loc.formContact.comboChose).select(loc.formContent.subjectContent)
         cy.get(loc.formContact.email).should('have.value', credential.emailLogin)
         cy.get(loc.formContact.orderReference).select(loc.formContent.orderContent)
         cy.get(loc.formContact.product).select(loc.formContent.produtContent)
         cy.get(loc.formContact.send).click()
         cy.get(loc.alert.alertButtonMessage).should('have.text', formMessage.validateMessageField)
       });

      it('Validate order reference field on contact form ', () => {
         cy.contactUs()
         cy.get(loc.formContact.comboChose).select(loc.formContent.subjectContent)
         cy.get(loc.formContact.email).should('have.value', credential.emailLogin)
         cy.get(loc.formContact.message).type('Form contact Test')
         cy.get(loc.formContact.send).click()
         cy.get(loc.alert.alertButtonMessage).should('have.text', formMessage.validateOrderField)

       });

});