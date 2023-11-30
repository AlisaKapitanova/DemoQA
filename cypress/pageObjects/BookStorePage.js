import LoginPage from "../pageObjects/LoginPage";

class BookStorePage {
    getLoginBtn = () => cy.get('#login');
    getUserNameValue = () => cy.get('#userName-value')

    ChooseLoginBtn() {
        this.getLoginBtn().click();
        return new LoginPage();
    }

}

export default BookStorePage;