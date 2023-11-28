
import loginPageData from "../fixtures/loginPage.json";
import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import BookStorePage from "../pageObjects/BookStorePage";
import ProfilePage from "../pageObjects/ProfilePage"

const homePage = new HomePage();
const loginPage = new LoginPage();
const bookStore = new BookStorePage();
const profilePage = new ProfilePage();

describe('Login test suit', () => {
    
    it("TC_07.01.17 | Verify Succesfull Login", () => {
        homePage
            .chooseBookStoreApplicationCard()
        bookStore
            .ChooseLoginBtn()
        loginPage
            .login(loginPageData.userName, loginPageData.password)  
        profilePage
            .should('be.visible')  
    })
})


