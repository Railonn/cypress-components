/// <reference types="cypress" />

context('Modal', () => {
    beforeEach(() => {
        cy.visit('../../tailwindcss-components/components/modal.html')
    })

    it('should display modal when click on display button', () => {
        cy.dataCy('modal').should('not.be.visible');
        cy.dataCy('btn-modal').click();
        cy.dataCy('modal').should('be.visible');
    });

    it('should not display modal when click outside modal', () => {
        cy.dataCy('modal').should('not.be.visible');
        cy.dataCy('btn-modal').click();
        cy.dataCy('modal').should('be.visible');
        cy.get('body').click(0, 0);
        cy.dataCy('modal').should('not.be.visible');
    });

    it('should have h2 with lorem ipsum into modal', () => {
        cy.dataCy('modal').should("not.be.visible");
        cy.dataCy('btn-modal').click();
        cy.dataCy('modal').should("be.visible");
        cy.get('[data-cy="modal"] h2').contains("Lorem Ipsum");
    })
})