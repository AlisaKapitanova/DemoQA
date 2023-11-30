import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import BookStorePage from "./BookStorePage.js";
import FormPage from "../pageObjects/FormPage.js";
import InteractionsPage from "./InteractionsPage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getBookStoreApplicationCard = () => cy.get("div.card:last-child");
  getFormCard = () => cy.get("div[class=category-cards] div:nth-child(2) div:nth-child(1)").contains(homePageData.Formname);;  
  getInteractionsBtn = () => cy.get('.top-card:nth-child(5)');
  
  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }

 clickInteractionsBtn() {
  this.getInteractionsBtn().should('be.visible').click();
  return new InteractionsPage();
}

  chooseBookStoreApplicationCard() {
    this.getBookStoreApplicationCard().click();
    return new BookStorePage();
  }

  clickFormCard() {
    this.getFormCard().click()
    return new FormPage()
  }
  
}

export default HomePage;
