/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage.js";
import ElementsPage from "../../pageObjects/ElementsPage.js";
import ButtonsPage from "../../pageObjects/ButtonsPage.js"

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
    .getClickMeBtn().should('be.visible').and('have.text','Click Me')            
    })

    it("AT_02.05.02|Elements > Buttons> Verify Button Click Notifications for RightBtn", () => {
    homePage
    .chooseElementsCard()
    elementsPage
    .chooseButtonsElement()
    buttonsPage
    .verifyRightBtn()
    .getVerifyMessage()
    .should('be.visible').and('have.text','You have done a right click')

    })

    it("AT_02.05.03|Elements > Buttons> Verify Button Click Notifications for ClickMeBtn", () => {
    homePage
    .chooseElementsCard()
    elementsPage
    .chooseButtonsElement()
    buttonsPage
    .verifyClickMeBtn()
    .getVerifyClickMeMessage()
    .should('be.visible').and('have.text','You have done a dynamic click')
     
    })

    it("AT_02.05.04|Elements > Buttons> Verify Button Click Notifications for DoubleClickBtn", () => {
        homePage
        .chooseElementsCard()
        elementsPage
        .chooseButtonsElement()
        buttonsPage
        .verifyDoubleClickBtn()
        .getVerifyDoublClickMessage()
        .should('be.visible').and('have.text','You have done a double click')
         
    })

    })