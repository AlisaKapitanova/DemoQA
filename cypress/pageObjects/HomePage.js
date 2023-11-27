import ElementsPage from "../pageObjects/ElementsPage.js";
import homePageData from "../fixtures/homePage.json";
import LoginPage from "./LoginPage.js";

class HomePage {
  getElementsCard = () => cy.get("div.card").contains(homePageData.ElementsCard);
  getLoginCard = () => cy.get("div.card").contains(homePageData.LoginCard);

  chooseElementsCard() {
    this.getElementsCard().click();
    return new ElementsPage();
  }

  chooseLoginCard() {
    this.getLoginCard().click();
    return new LoginPage();
  }
}

export default HomePage;
