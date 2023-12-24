// <reference types="cypress"/>  

import HomePage from "../../pageObjects/HomePage.js";
import InteractionsPage from "../../pageObjects/InteractionsPage";
import InteractionsDroppablePage from "../../pageObjects/InteractionsDroppablePage.js";


describe ('Droppable functions', () => {
    
    const interactionsPage = new InteractionsPage 
    const interactionsDroppablePage = new InteractionsDroppablePage
    const homePage = new HomePage
    
    it ('TC_06.04 | Interactions > Droppable > Simple  ', function() {
    
        homePage
        .clickInteractionsBtn()
        interactionsPage
        .clickDroppableBtn()
        interactionsDroppablePage
        .dragDragmeBoxandDropIntoDropBox()
        .getDropBox().should('contain.text', 'Dropped!', { timeout: 10000 })
})
})