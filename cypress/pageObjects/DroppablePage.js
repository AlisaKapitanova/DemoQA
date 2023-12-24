class DroppablePage {
  getDragmeBox = () => cy.get('#draggable')
  getDropBox = () => cy.get('#droppable')

  // getGridBtn = () => cy.get("#demo-tab-grid");
  // getGridCells = () => cy.get("#gridContainer .list-group-item-action");

  // clickGridBtn() {
  //   this.getGridBtn().click();
  //   return this;
  // }

  dragDragmeBoxandDropIntoDropBox() {
    this.getDragmeBox()
        .trigger('mousedown', { which:1, pageX:0, pageY:0})
        .trigger('mousemove', { which:1, pageX:350, pageY:0})
        .trigger('mouseup');
    return this;
  }


}

export default DroppablePage;