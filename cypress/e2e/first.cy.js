describe('', () => {
    it('Tools QA returns to mainPage', () => {
        cy.visit("https://demoqa.com/");
        cy.get("header a").should("have.attr", 'href', 'https://demoqa.com');
    });

    it("Check Box", () => {
        cy.visit('https://demoqa.com/');
        cy.get('.card').eq(0).click()
        cy.get('#item-1').contains('Check Box').click()
        cy.get('.rct-checkbox').click()
        cy.get('#result').should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')

    })
})