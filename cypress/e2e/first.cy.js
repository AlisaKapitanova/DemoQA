describe('', () => {
    it('Tools QA returns to mainPage', () => {
        cy.get("header a").should("have.attr", 'href', 'https://demoqa.com');
    });

    it("Check Box", () => {
        cy.get('.card').eq(0).click()
        cy.get('#item-1').contains('Check Box').click()
        cy.get('.rct-checkbox').click()
        cy.get('#result').should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    });

    it("Elements lenght", () => {
        cy.visit('https://demoqa.com/');
        cy.get('.card-body').should ('have.length',6).should('be.visible')
    });

    it("Menu title", () => {
        let title = ["Elements", "Forms", "Alerts, Frame & Windows", "Widgets", "Interactions", "Book Store Application"]

        cy.get(".card").each((el, ind) => {
            cy.wrap(el).should('have.text', title[ind])
        })
    })

});
