/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage.js";
import ElementsPage from "../../pageObjects/ElementsPage.js";
import LinksPage from "../../pageObjects/LinksPage.js";


const homePage = new HomePage();
const elementsPage = new ElementsPage()
const linksPage = new LinksPage()


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
it("02.06.02 Elements > Links > Created, No Content, Moved, Bad Request, Unauthorized, Forbidden, Not Found are clickable", () => {
    cy.visit('https://demoqa.com/links')
 
    linksPage
    .checkNoContent()
    .checkMoved()
    .checkBadRequest()
    .checkUnauthorized()
    .checkForbidden()
    .checkNotFound()
    .checkCreated()
    cy.request('https://demoqa.com/created')
    .its("status")
    .should('eq', 201);
  
 })
 
 })
