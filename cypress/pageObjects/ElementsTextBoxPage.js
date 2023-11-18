class ElementsTextBoxPage {
  getArrayOfInputFieldsNames = () => cy.get("#userForm label");
  getEmailInputField = () => cy.get("#userEmail");
  getSubmitButton = () => cy.get("#submit");

  typeEmail(email) {
    this.getEmailInputField().clear().type(email);
    return this;
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }
}

export default ElementsTextBoxPage;
