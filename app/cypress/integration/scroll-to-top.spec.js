/// <reference types="cypress" />

context('scrollToTop', () => {
    beforeEach(() => {
        cy.visit('/app/scroll-to-top.html')
    })

    it('should display button when scroll down', () => {
        cy.scrollTo(0, 500);
        cy.dataCy("btn-scroll-top").should('be.visible');
    });

    it('should scroll to top when click on top scroll button', () => {
        cy.scrollTo(0, 500);
        cy.dataCy("btn-scroll-top").click();
        cy.dataCy("btn-scroll-top").should('not.be.visible');
    });

})