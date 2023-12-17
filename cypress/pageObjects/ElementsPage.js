import ElementsTextBoxPage from "./ElementsTextBoxPage.js";
import RadioButtonPage from "../pageObjects/RadioButtonPage.js";
import ElementsWebTablesPage from "./ElementsWebTablesPage.js";

class ElementsPage {
  getTextBoxElement = () => cy.get("#item-0");
  getRadioButtonElement = () => cy.get("#item-2");
  getButtonElement = () => cy.get(".element-list").contains("Buttons");
  getWebTablesElement = () => cy.get(".element-list").contains("Web Tables");
  getLinksElement = () => cy.get(".element-list").contains("Links")
  getLinksGroupFirst = () => cy.get ('#linkWrapper h5:nth-child(1)')
  getLinksGroupSecond = () => cy.get ('#linkWrapper h5:nth-child(4)')
  getHomelink = () => cy.get('#simpleLink')

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

  chooseLinksElement (){
    this.getLinksElement().click()
    return this
  }
  chooseLinksGroupFirst () {
    this.getLinksGroupFirst().should('have.text','Following links will open new tab')
    return this
  }
  
  chooseLinksGroupSecond (){
    this.getLinksGroupSecond().should('have.text','Following links will send an api call')
    return this
  }


}
  

export default ElementsPage;
