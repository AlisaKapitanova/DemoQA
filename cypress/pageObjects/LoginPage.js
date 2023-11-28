import ProfilePage from "../pageObjects/ProfilePage"

class LoginPage {
    elements = {
        getUserNameInput: () => cy.get('#userName'),
        getPasswordInput: () => cy.get('#password'),
        getNewUserBtn : () => cy.get('#newUser'),
        getLogInBtn: () => cy.get("#login")
    };

    typeUserName(userName) {
        this.elements.getUserNameInput().type(userName)
        return this
    };

    typePassword(password) {
        this.elements.getPasswordInput().type(password)
        return this
    };

    clickLoginBtn() {
        this.elements.getLogInBtn().click()
        return this
    };

    clickNewUserBtn() {
        this.elements.getNewUserBtn().click()
        return this
    };

    login(userName, password) {
        this.typeUserName(userName)
        this.typePassword(password)
        this.clickLoginBtn()
        return new ProfilePage()
    };

  
}
export default LoginPage