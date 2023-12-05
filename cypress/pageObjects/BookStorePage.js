import LoginPage from "../pageObjects/LoginPage";
import ProfilePage from "./ProfilePage";

class BookStorePage {
    getLoginBtn = () => cy.get('#login');
    getUserNameValue = () => cy.get('#userName-value')
    getProfileBtn = () => cy.get('div[class="element-list collapse show"] li[id="item-3"] span[class="text"]')
    getLogoutBtn =() => cy.get('#submit')

    clickLoginBtn() {
        this.getLoginBtn().should('be.visible').click();
        return new LoginPage();
    }

    clickLogoutBtn() {
        this.getLogoutBtn().should('be.visible').click();
        return new LoginPage();
    }

    clickProfileBtn() {
        this.getProfileBtn().should('be.visible').click();
        return new ProfilePage();
    }

}

export default BookStorePage;