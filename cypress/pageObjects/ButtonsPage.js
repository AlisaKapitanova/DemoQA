class ButtonsPage {
   getRightBtn = () => cy.get('#rightClickBtn');
   getDoubleClickBtn = () => cy.get('#doubleClickBtn');
   getClickMeBtn = () => cy.get('div[class="col-12 mt-4 col-md-6"] div:nth-child(2) div:nth-child(3) button');
   getVerifyMessage = () => cy.get('#rightClickMessage');
   getVerifyClickMeMessage = () => cy.get('#dynamicClickMessage');
   getVerifyDoublClickMessage = () => cy.get('#doubleClickMessage');

   chooseRightBtn() {
   this.getRightBtn().should('be.visible').and('have.text','Right Click Me')
   return this
   }
   
   chooseDoubleClickBtn() {
    this.getDoubleClickBtn().should('be.visible').and('have.text','Double Click Me')
    return this
   }

   verifyRightBtn() {
      this.getRightBtn().rightclick()
      return this
      }
   verifyMessageRightBtn() {
      this.getVerifyMessage()
   }
   verifyClickMeBtn() {
      this.getClickMeBtn().click()
      return this
   }
   
   verifyDoubleClickBtn() {
      this.getDoubleClickBtn().dblclick()
      return this
   }

   }

export default ButtonsPage;