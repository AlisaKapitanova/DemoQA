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
});
