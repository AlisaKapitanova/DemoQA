import HomePage from "../../pageObjects/homePage";
import elementsTextBoxData from "../../fixtures/elementsTextBox.json";

const homePage = new HomePage();

describe("Elements  > Text Box", () => {
  it("TC_02.01.01.01 | Elements  > Text Box > Verify input fields names", () => {
    homePage
      .chooseElementsCard()
      .chooseTextBoxElement()
      .getArrayOfInputFieldsNames()
      .each(($el, idx) => {
        expect($el.text()).to.be.eq(elementsTextBoxData.inputFieldsNames[idx]);
      });
  });
});
