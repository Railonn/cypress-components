/// <reference types="cypress" />

context('todolist', () => {
    beforeEach(() => {
        cy.visit("../../alpinejs-todolist/app/index.html");
    });

    it("should add 4 todo item, delete the second item, and display 3 items", () => {
        cy.dataCy("todo-text-input").type("1");
        cy.dataCy("add-todo-btn").click();
        cy.dataCy("todo-text-input").type("2");
        cy.dataCy("add-todo-btn").click();
        cy.dataCy("todo-text-input").type("3");
        cy.dataCy("add-todo-btn").click();
        cy.dataCy("todo-text-input").type("4");
        cy.dataCy("add-todo-btn").click();

        cy.dataCy("todo-content").should("have.length", 4);

        cy.dataCy('todo-container').get('[data-cy="delete-todo-btn"').eq(0).click();

        cy.dataCy("todo-content").should("have.length", 3);
    });

})
