import ElementsTextBoxPage from "./ElementsTextBoxPage.js";
import RadioButtonPage from "../pageObjects/RadioButtonPage.js"

class ElementsPage {
  getTextBoxElement = () => cy.get("#item-0");
  getRadioButtonElement = () => cy.get("#item-2");

  chooseTextBoxElement() {
    this.getTextBoxElement().click();
    return new ElementsTextBoxPage();
  }

  chooseRadioButtonElement() {
    this.getRadioButtonElement().click();
    return new RadioButtonPage()
  }
}

export default ElementsPage;
