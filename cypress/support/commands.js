// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
import LoginPage from '../pageObjects/LoginPage';
import HomePage from '../pageObjects/HomePage';
import BookStorePage from "../pageObjects/BookStorePage";
import loginPageData from "../fixtures/loginPage.json"

const homePage = new HomePage();
const loginPage = new LoginPage();
const bookStore = new BookStorePage();

Cypress.Commands.add('login', (email, password) => { 
    homePage
            .chooseBookStoreApplicationCard()
        bookStore
            .clickLoginBtn()
        loginPage
            .login(loginPageData.userName, loginPageData.password)  
        bookStore
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })