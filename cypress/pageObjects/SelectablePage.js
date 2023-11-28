class SelectablePage {
    getGridBtn = () => cy.get("#demo-tab-grid");
    getGridCells = () => cy.get("#gridContainer .list-group-item.list-group-item-action");
    
    clickGridBtn() {
      this.getGridBtn().click();
      return this;
    }
  }
  
  export default SelectablePage;