
// <reference types="cypress"/>

import data from '../fixtures/selectablePageData.json'
import SelectablePage from '../pageObjects/SelectablePage'
import InteractionsPage from '../pageObjects/InteractionsPage'
import HomePage from '../pageObjects/HomePage'

describe ('InteracrionsPage', () => {
    const interactionsPage = new InteractionsPage 
    const selectablePage = new SelectablePage 
    const homePage = new HomePage
    
    it('Verify names of Grid tab cells', function() {
        
        homePage
        .clickInteractionsBtn() 
        interactionsPage
        .clickSelectableBtn()
        selectablePage
        .clickGridBtn()
        .getGridCells().each(($el,idx) => {
        expect($el.text()).to.be.equal(data.cellsNames[idx]); 
        })    
})

})