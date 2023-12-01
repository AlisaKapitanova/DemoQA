class RadioButtonPage {
  getQuestion = () => cy.get("div.mb-3");
  getArrayOfRadioButtons = () => cy.get("input[type='radio']");
  getArrayOfRadioButtonsNames = () => cy.get("label.custom-control-label");
  getYesRadioButton = () => cy.get("input#yesRadio");
  getYesVerifyingText = () => cy.get("p.mt-3");
  getImpressiveRadioButton = () => cy.get("input#impressiveRadio");
  getImpressiveVerifyingText = () => cy.get("p.mt-3");
  getNoRadioButton = () => cy.get("input#noRadio");

  verifyNumberOfRadioButtons() {
    this.getArrayOfRadioButtons().should("have.length", 3);
    return this;
  }

  checkYesRadioButton() {
    this.getYesRadioButton().should("exist").check({ force: true });
    return this;
  }

  checkImpressiveRadioButton() {
    this.getImpressiveRadioButton().should("exist").check({ force: true });
    return this;
  }

  verifyYesRadioButtonChecked() {
    this.getYesRadioButton().should("be.checked");
    return this;
  }

  verifyImpressiveButtonChecked() {
    this.getImpressiveRadioButton().should("be.checked");
    return this;
  }

  verifyYesRadioButtonUnchecked() {
    this.getYesRadioButton().should("not.be.checked");
    return this;
  }

  verifyImpressiveRadioButtonUnchecked() {
    this.getImpressiveRadioButton().should("not.be.checked");
    return this;
  }
}
export default RadioButtonPage;
