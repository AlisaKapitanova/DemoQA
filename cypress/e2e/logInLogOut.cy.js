// <reference types="cypress"/>
import data from '../fixtures/data.json'

describe('SignIn Testing', () => {
    
    it('Sign in to Your Account', function() {
        let signInPage = 'https://demoqa.com/books'
        let logInButton = '#login'
        let userNameField = '#userName'
        let passwordField = '#password'
        let loginButton = '#login'
        let userNameDisplayed = '#userName-value'
        let logOutButton = '#submit'
        let newUserButton = '#newUser'
        let firstNameField = '#firstname'
        let lastNameField = '#lastname'
        let registerButton = '#register'
        let messageField = '#name'

        cy.visit(signInPage);
        cy.get(logInButton).click();
        cy.get(userNameField).type(data.userName);
        cy.get(passwordField).type(data.password);
        cy.get(loginButton).click();
        cy.get(userNameDisplayed).should('have.text', data.userName);

        cy.get(logOutButton).click();

        cy.get(newUserButton).click();
        cy.get(firstNameField).type(data.firstName);
        cy.get(lastNameField).type(data.lasttName);
        cy.get(userNameField).type(data.userName2);
        cy.get(passwordField).type(data.password2);
        cy.get(registerButton).click();
        cy.get(messageField).should('have.text', data.message);
    })
})


