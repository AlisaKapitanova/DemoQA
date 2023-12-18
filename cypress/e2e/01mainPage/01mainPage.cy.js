import HomePage from "../../pageObjects/HomePage";
import homePageData from "../../fixtures/homePage.json"

describe ("HomePage", () => {

    const homePage = new HomePage();

    it("TC_01.01.01 Categories | HomePage > Verify categories name", () => {
        homePage
        .getCategory().each(($el, idx) => {
            cy.wrap($el).should('contain', homePageData.categoryCards[idx]);
        });
    })

    homePageData.cards.categoryCards.forEach((cardName, index) => {
    it("TC_01.01.02 Parametrization | HomePage > Verify card link functionality", function() {
        homePage
            .clickCards(cardName, index)
            .should('contains', homePageData.cards.categoryCardLinks[index])
        
        cy.contains(homePageData.cards.categoryCards[index])
    })
    })

})

