import SelectablePage from "./SelectablePage"
import DroppablePage from "./DroppablePage";

class InteractionsPage {
  getSelectableBtn = () => cy.get(".element-group:nth-child(5) #item-1")
  getDroppableBtn = () =>cy.get('.element-group:nth-child(5) #item-3')

  clickSelectableBtn() {
    this.getSelectableBtn().click();
    return new SelectablePage();
  }
  clickDroppableBtn() {
    this.getDroppableBtn().click();
    return new DroppablePage();
  }
}

export default InteractionsPage;