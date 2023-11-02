const website = Cypress.env("websiteAdress")

beforeEach (() => {
    cy.visit(website)
})

