
import loginPageData from "../../fixtures/loginPage.json";
import LoginPage from '../../pageObjects/LoginPage';
import HomePage from '../../pageObjects/HomePage';
import BookStorePage from "../../pageObjects/BookStorePage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const bookStore = new BookStorePage();

describe('07.01 Book Store Application > Login', () => {
    
    it("TC_07.01.17 | Verify Succesfull Login", () => {
        homePage
            .chooseBookStoreApplicationCard()
        bookStore
            .ChooseLoginBtn()
        loginPage
            .login(loginPageData.userName, loginPageData.password)  
        bookStore
            .getUserNameValue().should('have.text', loginPageData.userName)
    })
})


