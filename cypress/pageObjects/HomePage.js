import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import FormPage from "../pageObjects/FormPage.js";
import InteractionsPage from "./InteractionsPage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getFormCard = () => cy.get("div[class=category-cards] div:nth-child(2) div:nth-child(1)").contains(homePageData.Formname)  getInteractionsBtn = () => cy.get('.top-card:nth-child(5)');
  
  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }

 clickInteractionsBtn() {
  this.getInteractionsBtn().click();
  return new InteractionsPage();
}
  clickFormCard() {
    this.getFormCard().click()
    return new FormPage()
  }
}

export default HomePage;
