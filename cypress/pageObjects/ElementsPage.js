import ElementsTextBoxPage from "./ElementsTextBoxPage.js";
import RadioButtonPage from "../pageObjects/RadioButtonPage.js";
import ButtonsPage from "../pageObjects/ButtonsPage.cy.js"

class ElementsPage {
  getTextBoxElement = () => cy.get("#item-0");
  getRadioButtonElement = () => cy.get("#item-2");
  getButtonElement = () => cy.get('.element-list').contains('Buttons')
 
  chooseTextBoxElement() {
    this.getTextBoxElement().click();
    return new ElementsTextBoxPage();
  }

  chooseRadioButtonElement() {
    this.getRadioButtonElement().click();
    return new RadioButtonPage();
  }
  chooseButtonsElement (){
    this.getButtonElement().click()
    return this
  }

 
}

export default ElementsPage;
