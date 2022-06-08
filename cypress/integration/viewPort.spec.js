

describe("Test Session contact Us", () => {

    it.only('Viewport in Chorme', () => {
        cy.visit('http://automationpractice.com')
        cy.viewport(1280, 800)
        cy.get('#footer').should('exist').and('be.visible')
        cy.get('.nav > .container > .row').should('exist').and('be.visible')
        cy.get('.row > a > .img-responsive').should('exist').and('be.visible')
        cy.get('.sf-menu').should('exist').and('be.visible')
      });

      it('Viewport in Chorme', () => {
        cy.visit('http://automationpractice.com')
        //cy.viewport(1280, 800)
        cy.get('.cypress-wrapper').each((Element, index) => {


        })
      });


});