/// <reference types="cypress"/>
import loginPageData from '../../fixtures/loginPageData.json'
import LoginPage from '../pageObjects/LoginPage'
import HomePage from '../pageObjects/HomePage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Login test suit', () => {
    
    it.only("TC_ | Login", () => {
        homePage
            .chooseLoginCard()
        loginPage
            .login(loginPageData.userName, loginPageData.password)    
    })
})


