import ToolTipsPage from "./ToolTipsPage.js";

class WidgetsPage {
    getToolTipsWidget = () => cy.get("div.element-group:nth-child(4) #item-6");
    
    chooseToolTipsWidget() { 
        this.getToolTipsWidget().click()
        return new ToolTipsPage()
    }
}
export default WidgetsPage