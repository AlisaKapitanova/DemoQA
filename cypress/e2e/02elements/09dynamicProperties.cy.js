/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage.js";
import ElementsPage from "../../pageObjects/ElementsPage.js";
import DynamicPropertiesPage from "../../pageObjects/DynamicPropertiesPage.js";

const homePage = new HomePage();
const elementsPage = new ElementsPage()
const dynamicPropertiesPage = new DynamicPropertiesPage

describe("Elements> Dynamic Properties ", () => {
    it("AT_02.09.01  Verify the 5secButton is visible having blue color " , () =>{
        homePage
        .chooseElementsCard()
        elementsPage
        .chooseDynamicProperties()
        .get5secButton().should('have.css', 'background-color', 'rgb(0, 123, 255)')
        
    })
    it("AT_02.09.02  Verify the ColorChange and Visible After buttons" , () =>{
         cy.visit('https://demoqa.com/dynamic-properties')
         
         dynamicPropertiesPage
         .checkVisibleAfter()
         .getColorChange().should('have.css', 'Color', 'rgb(220, 53, 69)',  { timeout: 10000 })
        
    })
}

)