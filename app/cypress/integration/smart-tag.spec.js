/// <reference types="cypress" />

context('smartTag', () => {
    beforeEach(() => {
        cy.visit('/app/smart-tag.html')
    })

    it('should display tag when mouse over the bloc', () => {
        cy.dataCy("tag").should("not.be.visible");
        cy.dataCy('see-more-hover').trigger('mouseover');
        cy.dataCy("tag").should('be.visible');
    });

    it('shouldnt display tag when mouse leave the bloc', () => {
        cy.dataCy("tag").should("not.be.visible");
        cy.dataCy('see-more-hover').trigger('mouseover');
        cy.dataCy("tag").should('be.visible');
        cy.dataCy('see-more-hover').trigger('mouseleave');
        cy.dataCy("tag").should('not.be.visible');
    });

})