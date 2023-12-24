class InteractionsDroppablePage {
  getDragmeBox = () => cy.get('#draggable')
  getDropBox = () => cy.get('#droppable')


  dragDragmeBoxandDropIntoDropBox() {
    this.getDragmeBox()
        .trigger('mousedown', { which:1, pageX:0, pageY:0})
        .trigger('mousemove', { which:1, pageX:350, pageY:0})
        .trigger('mouseup');
    return this;
  }


}

export default InteractionsDroppablePage;