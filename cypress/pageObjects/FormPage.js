import homePageData from "../fixtures/homePage.json";

class FormPage {
  getFormElement = () => cy.get(".menu-list li:nth-child(1)").contains(homePageData.Practice);
  getPracticeForm = () => cy.get("#userForm div input[value]")
  
  chooseFormElement() {
    this.getFormElement().click();
    return new FormPage();
  }
  checkPracticeForm() {
    this.getPracticeForm().should ('have.length',10).and('be.visible');
    
  }
}

export default FormPage;
