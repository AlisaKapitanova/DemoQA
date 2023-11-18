/// <reference types="cypress"/>

describe('Fill the Student Registration form', () => {
    it('Placeholders', () => {   
        cy.get("div[class=category-cards] div:nth-child(2) div:nth-child(1)").contains('Forms').click()
        cy.get(".menu-list li:nth-child(1)").contains("Practice Form").click()
        cy.get("#userForm div input[value]").should ('have.length',10).and('be.visible')
    });
})