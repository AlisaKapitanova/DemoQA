
class LoginPage {
    elements = {
        getUserNameInput: () => cy.get('#userName'),
        getPasswordInput: () => cy.get('#password'),
        getNewUserBtn : () => cy.get('#newUser'),
        getLogInBtn: () => cy.get("#login")
    };

    typeUserName(userName) {
        this.elements.getUserNameInput().type(userName)
    };

    typePassword(password) {
        this.elements.getPasswordInput().type(password)
    };

    clickLoginBtn() {
        this.elements.getLogInBtn().click()
    };

    clickNewUserBtn() {
        this.elements.getNewUserBtn().click()
    };

    login(userName, password) {
        this.typeUserName(userName)
        this.typePassword(password)
        this.clickLoginBtn()
        return new ProfilePage()
    };

  
}
export default LoginPage