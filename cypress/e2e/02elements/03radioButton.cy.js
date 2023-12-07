import HomePage from "../../pageObjects/HomePage.js";
import elementsRadioButtonData from "../../fixtures/elementsRadioButton.json";

const homepage = new HomePage();

describe("Elements > Radio Button", () => {
  it("AT_02.03.01|Elements > Radio Button> Verify the Question on the page", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .getQuestion()
      .should("have.text", elementsRadioButtonData.questionOfPage);
  });

  it("AT_02.03.02|Elements > Radio Button > Verify number and name of radio buttons", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .verifyNumberOfRadioButtons()
      .getArrayOfRadioButtonsNames()
      .then(($elements) => {
        const namesOfRadioButtons = Cypress.$.makeArray($elements).map(
          ($el) => $el.innerText
        );
        expect(namesOfRadioButtons).to.be.deep.equal(
          elementsRadioButtonData.namesOfRadioButtonsExpected
        );
      });
  });

  it("AT_02.03.03 | Elements > Radio Button> Verify positive rating ('Yes' button)", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .checkYesRadioButton()
      .getYesVerifyingText()
      .should("have.text", elementsRadioButtonData.yesVerifyingText);
  });

  it("AT_02.03.04 | Elements > Radio Button> Verify positive rating ('Impressive' button)", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .checkImpressiveRadioButton()
      .getImpressiveVerifyingText()
      .should("have.text", elementsRadioButtonData.impressiveVerifyingText);
  });

  it("AT_02.03.05 | Elements > Radio Button> Verify Prevention of Negative Rating ('No' button is disabled)", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .getNoRadioButton()
      .should("exist")
      .and("be.disabled");
  });

  it("AT_02.03.06 | Elements > Radio Button>  Verify an ability to check only one radio button", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .checkYesRadioButton()
      .verifyYesRadioButtonChecked()
      .verifyImpressiveRadioButtonUnchecked()
      .checkImpressiveRadioButton()
      .verifyImpressiveButtonChecked()
      .verifyYesRadioButtonUnchecked();
  });
  
});