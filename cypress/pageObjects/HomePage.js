import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import FormPage from "../pageObjects/FormPage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getFormCard = () => cy.get("div[class=category-cards] div:nth-child(2) div:nth-child(1)").contains(homePageData.Formname)
  
  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }
  clickFormCard() {
    this.getFormCard().click()
    return new FormPage()
  }
}

export default HomePage;
