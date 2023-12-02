import LoginPage from "../pageObjects/LoginPage";

class BookStorePage {
    getLoginBtn = () => cy.get('#login');
    getUserNameValue = () => cy.get('#userName-value')
    getLogoutBtn = () => cy.get('#submit')

    chooseLoginBtn() {
        this.getLoginBtn().should('be.visible').click();
        return new LoginPage();
    }

    chooseLogoutBtn() {
        this.getLogoutBtn().should('be.visible').click()
        return new LoginPage()
    }

}

export default BookStorePage;