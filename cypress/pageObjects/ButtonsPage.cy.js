class ButtonsPage {
   getRightBtn = () => cy.get('#rightClickBtn');
   getDoubleClickBtn = () => cy.get('#doubleClickBtn');
   getClickMeBtn = () => cy.get('div[class="col-12 mt-4 col-md-6"] div:nth-child(2) div:nth-child(3)')
   getVerifyMessage = () => cy.get('#rightClickMessage')

   chooseRightBtn() {
   this.getRightBtn().should('be.visible').and('have.text','Right Click Me')
   return this
   }
   
   chooseDoubleClickBtn() {
    this.getDoubleClickBtn().should('be.visible').and('have.text','Double Click Me')
    return this
   }

   chooseClickMeButton() {
    this.getClickMeBtn().should('be.visible').and('have.text','Click Me')
    return this
   }

   verifyRightBtn() {
      this.getRightBtn().rightclick()
      return this
      }
   verifyMessageRightBtn() {
      this.getVerifyMessage()
   }

   }

export default ButtonsPage;