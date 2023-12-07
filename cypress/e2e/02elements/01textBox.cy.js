import HomePage from "../../pageObjects/HomePage.js";
import elementsTextBoxData from "../../fixtures/elementsTextBox.json";
import FormPage from "../../pageObjects/FormPage.js";

const homePage = new HomePage();
const formPage = new FormPage();

describe("Elements  > Text Box", () => {

  const arrayOfOutputFieldsExpected = [
    `Name:${elementsTextBoxData.fullName}`,
    `Email:${elementsTextBoxData.email}`,
    `Current Address :${elementsTextBoxData.currentAddress} `,
    `Permananet Address :${elementsTextBoxData.permanentAddress}`,
  ];

  it("AT_02.01.01.01 | Elements  > Text Box > Verify input fields names", () => {
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
    it(`AT_02.01.01.02 | Elements  > Text Box > Verify validation of Email input field with invalid email ${name}`, () => {
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

  it(`AT_02.01.01.02 | Elements  > Text Box > Verify the input field is active and has a blue border`, () => {
    homePage
      .chooseElementsCard()
      .chooseTextBoxElement()
      .verifyFullNameInputFieldActiveBorder()
      .verifyEmailInputFieldActiveBorder()
      .verifyCurrentAddressFieldActiveBorder()
      .verifyPermanentAddressFieldActiveBorder();
  });

  it("AT_02.01.01.03 | Elements  > Text Boxs > Verify the submitted information is displayed", () => {
    homePage
      .chooseElementsCard()
      .chooseTextBoxElement()
      .typeFullName(elementsTextBoxData.fullName)
      .typeEmail(elementsTextBoxData.email)
      .typeCurrentAddress(elementsTextBoxData.currentAddress)
      .typePermanentAddress(elementsTextBoxData.permanentAddress)
      .clickSubmitButton()

      .getArrayOfOutputFields()
      .each(($el, idx) => {
        expect($el.text()).to.be.eq(arrayOfOutputFieldsExpected[idx]);
      });
  });

  it("AT_02.01.01.05 | Elements  > Practice Form > Verify placeholders", () => {
    homePage
      .clickFormCard()
    formPage
      .chooseFormElement()
      .clickFormname()
      .checkPracticeForm()
  })
})