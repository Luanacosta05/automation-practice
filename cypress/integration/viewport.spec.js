/// <reference types="cypress" />

describe("Pixel Perfect Test", () => {

    it.only('Viewport in Chorme', () => {
        cy.viewport(1000, 600)
        cy.visit('http://automationpractice.com')
        cy.percySnapshot('homePage')
      });


});