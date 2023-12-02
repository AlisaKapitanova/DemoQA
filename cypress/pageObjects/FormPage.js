import homePageData from "../fixtures/homePage.json";

class FormPage {
  getFormElement = () => cy.get(".menu-list li:nth-child(1)").contains(homePageData.Practice);
  getFormName = () => cy.get(".menu-list li:nth-child(1)").contains(homePageData.Formname)
  getPracticeForm = () => cy.get("#userForm div input[value]")

  chooseFormElement() {
    this.getFormElement().click();
    return new FormPage();
  }
  clickFormname() {
    this.getFormName().click()
    return this 
  }
 
  checkPracticeForm() {
    this.getPracticeForm().should ('have.length',10).and('be.visible')
    return this 
  }
}

 
export default FormPage;
