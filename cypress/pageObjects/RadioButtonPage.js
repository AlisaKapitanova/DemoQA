class RadioButtonPage {
  getQuestion = () => cy.get("div.mb-3");
  getArrayOfRadioButtons = () => cy.get("input[type='radio']");
  getArrayOfRadioButtonsNames = () => cy.get("label.custom-control-label");
  getYesRadioButton = () => cy.get("input#yesRadio");
  getYesVerifyingText = () => cy.get("p.mt-3");

  verifyNumberOfRadioButtons() {
    this.getArrayOfRadioButtons().should("have.length", 3);
    return this;
  }

  checkYesRadioButton() {
    this.getYesRadioButton().should("exist").check({ force: true });
    return this;
  }
}
export default RadioButtonPage;
