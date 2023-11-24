class ElementsTextBoxPage {
  getArrayOfInputFieldsNames = () => cy.get("#userForm label");
  getFullNameInputField = () => cy.get("input#userName");
  getEmailInputField = () => cy.get("#userEmail");
  getCurrentAddressInputField = () => cy.get("textarea#currentAddress");
  getPermanentAddressInputField = () => cy.get("textarea#permanentAddress");
  getSubmitButton = () => cy.get("#submit");
  getArrayOfOutputFields = () => cy.get("div#output p");

  typeEmail(email) {
    this.getEmailInputField().clear().type(email);
    return this;
  }

  clickSubmitButton() {
    this.getSubmitButton().click();
    return this;
  }

  verifyFullNameInputFieldActiveBorder() {
    this.getFullNameInputField()
      .click()
      .should("have.css", "border")
      .and("contain", "rgb(128, 189, 255)");
    return this;
  }

  verifyEmailInputFieldActiveBorder() {
    this.getEmailInputField()
      .click()
      .should("have.css", "border")
      .and("contain", "rgb(128, 189, 255)");
    return this;
  }

  verifyCurrentAddressFieldActiveBorder() {
    this.getCurrentAddressInputField()
      .click()
      .should("have.css", "border")
      .and("contain", "rgb(128, 189, 255)");
    return this;
  }

  verifyPermanentAddressFieldActiveBorder() {
    this.getPermanentAddressInputField()
      .click()
      .should("have.css", "border")
      .and("contain", "rgb(128, 189, 255)");
    return this;
  }

  typeFullName(fullName) {
    this.getFullNameInputField().clear().type(fullName);
    return this;
  }

  typeCurrentAddress(currentAddress) {
    this.getCurrentAddressInputField().clear().type(currentAddress);
    return this;
  }

  typePermanentAddress(permanentAddress) {
    this.getPermanentAddressInputField().clear().type(permanentAddress);
    return this;
  }
}

export default ElementsTextBoxPage;
