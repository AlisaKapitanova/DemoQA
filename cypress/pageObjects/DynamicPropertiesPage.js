import ElementsTextBoxPage from "./ElementsTextBoxPage.js";

class DynamicPropertiesPage {
    getEnable5sec = () => cy.get("div.col-12.mt-4.col-md-6 div:nth-child(2) #enableAfter")

checkEnable5sec() {
    this.getEnable5sec()
    return this 
}
    
}

export default DynamicPropertiesPage;