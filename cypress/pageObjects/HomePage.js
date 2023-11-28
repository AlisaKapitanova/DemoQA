import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import BookStorePage from "./BookStorePage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getBookStoreApplicationCard = () => cy.get("div.card:last-child");

  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }

  chooseBookStoreApplicationCard() {
    this.getBookStoreApplicationCard().click();
    return new BookStorePage();
  }
}

export default HomePage;
