/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage.js";
import ElementsPage from "../../pageObjects/ElementsPage.js";


const homePage = new HomePage();
const elementsPage = new ElementsPage()


describe('Elements > Testing the links' ,() => {
    it("02.06.01 Elements > Links > HomeLink is clickable", () => {
        homePage
        .chooseElementsCard()
        elementsPage
        .chooseLinksElement()
        .chooseLinksGroupFirst()
        .chooseLinksGroupSecond()
        .getHomelink().should('have.attr','href').and('include','demoqa.com')

})
})
