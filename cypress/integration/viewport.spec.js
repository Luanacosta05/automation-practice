
describe("Pixel Perfect Test", () => {

    it.only('Viewport in Chorme', () => {
        cy.visit('http://automationpractice.com')
        cy.percySnapshot('homePage')
      });


});