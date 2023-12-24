// <reference types="cypress"/>  

import HomePage from "../../pageObjects/HomePage.js";
import InteractionsPage from "../../pageObjects/InteractionsPage";
import DroppablePage from "../../pageObjects/DroppablePage.js";


describe ('Droppable functions', () => {
    
    const interactionsPage = new InteractionsPage 
    const droppablePage = new DroppablePage 
    const homePage = new HomePage
    
    it ('TC_06.04 | Interactions > Droppable > Simple  ', function() {
    
        homePage
        .clickInteractionsBtn()
        interactionsPage
        .clickDroppableBtn()
        droppablePage
        .dragDragmeBoxandDropIntoDropBox()
        .getDropBox().should('contain.text', 'Dropped!')
})
})