import HomePage from "../../pageObjects/HomePage.js";
import elementsTextBoxData from "../../fixtures/elementsTextBox.json";

const homePage = new HomePage();

describe("Elements  > Text Box", () => {
  it("TC_02.01.01.01 | Elements  > Text Box > Verify input fields names", () => {
      homePage
        .chooseElementsCard()
        .chooseTextBoxElement()
        .getArrayOfInputFieldsNames()
        .each(($el, idx) => {
          expect($el.text()).to.be.eq(
            elementsTextBoxData.inputFieldsNames[idx]
          );
        });
  });
  
  elementsTextBoxData.invalidEmailForValidation.forEach((name, i) => { 
       it(`TC_02.01.01.02 | Elements  > Text Box > Verify validation of Email input field with invalid email ${name}`, () => {
         homePage
           .chooseElementsCard()
           .chooseTextBoxElement()
           .typeEmail(name)
           .clickSubmitButton()
           .getEmailInputField()
           .should("have.css", "border")
           .and("contain", "rgb(255, 0, 0)");
       });
  
  });

      it(`TC_02.01.01.02 | Elements  > Text Box > Verify the input field is active and has a blue border`, () => {
        homePage
          .chooseElementsCard()
          .chooseTextBoxElement()
          .verifyFullNameInputFieldActiveBorder()
          .verifyEmailInputFieldActiveBorder()
          .verifyCurrentAddressFieldActiveBorder()
          .verifyPermanentAddressFieldActiveBorder();
      });
})

