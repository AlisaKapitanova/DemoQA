import ElementsTextBoxPage from "./ElementsTextBoxPage.js";

class DynamicPropertiesPage {
    getColorChange = () => cy.get("div.col-12.mt-4.col-md-6 div:nth-child(2) #colorChange")
    getVisibleAfter = () => cy.get("div.col-12.mt-4.col-md-6 div:nth-child(2) #visibleAfter")

checkVisibleAfter() {
    this.getVisibleAfter()
    .should('contain.text', 'Visible After 5 Seconds', { timeout: 5000 })
    return this 
}
    
}

export default DynamicPropertiesPage;