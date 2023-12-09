/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage.js";
import ElementsPage from "../../pageObjects/ElementsPage.js";
import ButtonsPage from "../../pageObjects/ButtonsPage.cy.js"

const homePage = new HomePage();
const elementsPage = new ElementsPage()
const buttonsPage = new ButtonsPage

describe("Elements > Testing the buttons", () => {
    it("AT_02.05.01|Elements > Buttons> Buttons are visible on the page", () => {
    homePage
    .chooseElementsCard()
    elementsPage
    .chooseButtonsElement()
    buttonsPage
    .chooseRightBtn()
    .chooseDoubleClickBtn()
    .chooseClickMeButton()            
    })

    it("AT_02.05.01|Elements > Buttons> Verify Button Click Notifications for RightBtn", () => {
    homePage
    .chooseElementsCard()
    elementsPage
    .chooseButtonsElement()
    buttonsPage
    .verifyRightBtn()
    .getVerifyMessage()
    .should('be.visible').and('have.text','You have done a right click')

    })
    })