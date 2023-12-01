import HomePage from "../../pageObjects/HomePage";
import homePageData from "../../fixtures/homePage.json"

describe ("HomePage", () => {

    const homePage = new HomePage();


    it("TC_01.01.01 first  | HomePage > Verify categories name", () => {
        homePage
        .chooseCategory().each(($el, idx) => {
            cy.wrap($el).should('contain', homePageData.categoryCards[idx]);
        });
    })

    it("TC_01.01.01 second | HomePage > Verify categories name", () => {
        homePage
        .getCategory().each(($el, idx) => {
            cy.wrap($el).should('contain', homePageData.categoryCards[idx]);
        });
    })

})

