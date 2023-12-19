/// <reference types="cypress"/>
import HomePage from "../../pageObjects/HomePage.js";
import ElementsPage from "../../pageObjects/ElementsPage.js";
import DynamicPropertiesPage from "../../pageObjects/DynamicPropertiesPage.js";

const homePage = new HomePage();
const elementsPage = new ElementsPage()
const dynamicPropertiesPage = new DynamicPropertiesPage

describe("Elements> Dynamic Properties ", () => {
    it("AT_02.09  Verify the 5secButton is visible having blue color " , () =>{
        homePage
        .chooseElementsCard()
        elementsPage
        .chooseDynamicProperties()
        .get5secButton().should('have.css', 'background-color', 'rgb(0, 123, 255)')
        
    })

}

)