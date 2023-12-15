import ElementsTextBoxPage from "./ElementsTextBoxPage.js";
import RadioButtonPage from "../pageObjects/RadioButtonPage.js";
import ButtonsPage from "../pageObjects/ButtonsPage.cy.js";
import ElementsWebTablesPage from "./ElementsWebTablesPage.js";

class ElementsPage {
  getTextBoxElement = () => cy.get("#item-0");
  getRadioButtonElement = () => cy.get("#item-2");
  getButtonElement = () => cy.get(".element-list").contains("Buttons");
  getWebTablesElement = () => cy.get(".element-list").contains("Web Tables");

  chooseTextBoxElement() {
    this.getTextBoxElement().click();
    return new ElementsTextBoxPage();
  }

  chooseRadioButtonElement() {
    this.getRadioButtonElement().click();
    return new RadioButtonPage();
  }
  chooseButtonsElement() {
    this.getButtonElement().click();
    return this;
  }

  chooseWebTablesElement() { 
    this.getWebTablesElement().click();
    return new ElementsWebTablesPage();
  }
}

export default ElementsPage;
