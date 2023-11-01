describe('', () => {
    it('Tools QA returns to mainPage', () => {
        cy.visit("https://demoqa.com/");
        cy.get("header a").should("have.attr", 'href', 'https://demoqa.com');
    });
    
})