import loginPageData from "../../fixtures/loginPage.json";
import LoginPage from '../../pageObjects/LoginPage';
import HomePage from '../../pageObjects/HomePage';
import BookStorePage from "../../pageObjects/BookStorePage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const bookStore = new BookStorePage();

describe('07.03 Book Store Application > Profile', () => {
    
    it("TC_07.04. | Verify Delete All Books", () => {
        CSSSkewY.login()
    })
})