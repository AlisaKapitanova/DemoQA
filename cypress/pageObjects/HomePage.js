import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import BookStorePage from "./BookStorePage.js";
import FormPage from "../pageObjects/FormPage.js";
import WidgetsPage from "./WidgetsPage.js";
import InteractionsPage from "./InteractionsPage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getBookStoreApplicationCard = () => cy.get("div.card:last-child");
  getFormCard = () => cy.get("div[class=category-cards] div:nth-child(2) div:nth-child(1)").contains(homePageData.Formname);
  getCategory = () => cy.get(".category-cards");
  getWidgetsCard = () => cy.get("div.card").contains(homePageData.WidgetsCard);
  getInteractionsBtn = () => cy.get('.top-card:nth-child(5)');
  getCards = () => cy.get('.card');

  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }

  chooseBookStoreApplicationCard() {
    this.getBookStoreApplicationCard().click();
    return new BookStorePage();
  }

  clickFormCard() {
    this.getFormCard().click()
    return new FormPage()
  }

  chooseCategory() {
    this.getCategory().click();
    return this
  }

  chooseWidgetsCard() {
    this.getWidgetsCard().click();
    return new WidgetsPage();
  }

  clickInteractionsBtn() {
    this.getInteractionsBtn().click();
    return new InteractionsPage();
  }

  clickCards(cardName, index) {
    this.getCards().eq(index).as('card')
    cy.get('@card').contains(cardName)
    cy.get('@card').click()
    return cy.url()
  }
}

export default HomePage;
