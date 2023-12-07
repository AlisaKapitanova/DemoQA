class ButtonsPage {
   getRightBtn = () => cy.get('#rightClickBtn');
   getDoubleClickBtn = () => cy.get('#doubleClickBtn');
   getClickMeBtn = () => cy.get('div[class="col-12 mt-4 col-md-6"] div:nth-child(2) div:nth-child(3)')

   chooseRightBtn() {
   this.getRightBtn().click().should('be.visible').and('have.text','Right Click Me')
   return this
   }
   
   chooseDoubleClickBtn() {
    this.getDoubleClickBtn().click().should('be.visible').and('have.text','Double Click Me')
    return this
   }

   chooseClickMeButton() {
    this.getClickMeBtn().click().should('be.visible').and('have.text','Click Me')
    return this
   }
   }

export default ButtonsPage;