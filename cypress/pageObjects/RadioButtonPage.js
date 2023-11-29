class RadioButtonPage {
  getQuestion = () => cy.get("div.mb-3");
  getArrayOfRadioButtons = () => cy.get("input[type='radio']");
  getArrayOfRadioButtonsNames = () => cy.get("label.custom-control-label");

  verifyNumberOfRadioButtons() {
    this.getArrayOfRadioButtons().should("have.length", 3);
    return this;
  }
}
export default RadioButtonPage;