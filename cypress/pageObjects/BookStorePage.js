import LoginPage from "../pageObjects/LoginPage";

class BookStorePage {
    getLoginBtn = () => cy.get('#login');

    ChooseLoginBtn() {
        this.getLoginBtn().click();
        return new LoginPage();
    }

}

export default BookStorePage;