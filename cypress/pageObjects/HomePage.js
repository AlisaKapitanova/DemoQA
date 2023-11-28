import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import InteractionsPage from "./InteractionsPage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getInteractionsBtn = () => cy.get('.top-card:nth-child(5)');
  
  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }

 clickInteractionsBtn() {
  this.getInteractionsBtn().click();
  return new InteractionsPage();
}
}

export default HomePage;
