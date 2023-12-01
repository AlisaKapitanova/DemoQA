import loginPageData from "../../fixtures/loginPage.json";
import LoginPage from '../../pageObjects/LoginPage';
import HomePage from '../../pageObjects/HomePage';
import BookStorePage from "../../pageObjects/BookStorePage";
import ProfilePage from "../../pageObjects/ProfilePage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const bookStore = new BookStorePage();
const profilePage = new ProfilePage();

describe('07.03 Book Store Application > Profile', () => {
    
    it("TC_07.04. | Verify Delete All Books", () => {
        cy.login(loginPageData.userName, loginPageData.password)
        bookStore
            .clickProfileBtn()
        profilePage
            .clickDeleteAllBtn()
        cy.on('window:alert', (str) => {
            expect(str).to.equel('Do you want to delete all books?')
        cy.get('#closeSmallModal-ok').should('contain', "OK")
        })
        //cy.get('#closeSmallModal-cancel').should('contain', "Cancel")
        cy.on('window:alert', (str) => {
            expect(str).to.equel("No books available in your's collection!")
        })

    })
})