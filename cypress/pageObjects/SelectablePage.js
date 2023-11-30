class SelectablePage {
    getGridBtn = () => cy.get("#demo-tab-grid");
    getGridCells = () => cy.get("#gridContainer .list-group-item");
    
    clickGridBtn() {
      this.getGridBtn().click();
      return this;
    }.
  }
  
  export default SelectablePage;