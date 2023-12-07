import loginPageData from "../../fixtures/loginPage.json";
import LoginPage from '../../pageObjects/LoginPage';
import BookStorePage from "../../pageObjects/BookStorePage";

const loginPage = new LoginPage();
const bookStore = new BookStorePage();

describe('07.01 Book Store Application > Login', () => {

    it("AT_07.01.17 | Verify Succesfull Login", () => {
        cy.login(loginPageData.userName, loginPageData.password)
        bookStore
            .getUserNameValue().should('have.text', loginPageData.userName)
    })

    it("AT_07.01.16 | Verify Succesfull Logout", () => {
        cy.login(loginPageData.userName, loginPageData.password)
        bookStore
            .clickLogoutBtn()
        loginPage
            .elements.getWelcomeMessage().should('have.text', loginPageData.message)

    })
})