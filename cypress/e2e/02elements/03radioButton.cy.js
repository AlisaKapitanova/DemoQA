import HomePage from "../../pageObjects/HomePage.js";
import elementsRadioButtonData from "../../fixtures/elementsRadioButton.json";

const homepage = new HomePage();

describe("Elements > Radio Button", () => {
  it("TC_02.03.01|Elements > Radio Button> Verify the Question on the page", () => {
    homepage
      .chooseElementsCard()
      .chooseRadioButtonElement()
      .getQuestion()
      .should("have.text", elementsRadioButtonData.questionOfPage);
  });

  it("TC_02.03.02|Elements > Radio Button> Verify ", () => {
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
});
