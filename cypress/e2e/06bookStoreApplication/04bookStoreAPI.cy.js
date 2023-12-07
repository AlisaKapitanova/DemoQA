/// <reference types="cypress"/>
const API_BASE_URL = Cypress.env('apiBaseUrl')
let dataFixtures;
let CREATED_ID;
let token;
let expires;

describe('apiSpec', () => {

    beforeEach(function () {
        cy.fixture('apiData').then(data => {
            dataFixtures = data;
            return dataFixtures;
        });
    });

    describe(' DemoQAVerify Successful User Information Retrieval', () => {

        const getResponse = () =>
            cy.request({
                method: "GET",
                url: 'https://demoqa.com/'
            });

        it('AT_07.04.04', () => {
            getResponse()
                .its('status')
                .should('be.eq', 200)
        });

        it('Verify response contains property', () => {
            getResponse()
                .then(response => {
                    console.log(response)
                    expect(response).to.have.property('headers')
                })
        })
    });

    describe('Authorization', () => {
        const getResponce = () =>
            cy.request({
                method: 'POST',
                url: `${API_BASE_URL}/Account/v1/Authorized`,
                headers: {},
                body: {
                    userName: dataFixtures.userName,
                    password: dataFixtures.password
                }
            });

        it('AT_07.04.01 | Authorization', () => {
            getResponce()
                .then((response) => {
                    expect(response.status).to.be.eql(200);
                    console.log({
                        response
                    });
                })
        });
    });

    describe.only('Login', () => {

        it('AT_07.04.02 | Generate Token', () => {
            cy.request({
                    method: 'POST',
                    url: 'https://demoqa.com/Account/v1/GenerateToken',
                    headers: {},
                    body: {
                        userName: dataFixtures.userName,
                        password: dataFixtures.password
                    },
                })
                .then((response) => {
                    expect(response.status).to.be.eql(200);
                    console.log({
                        response
                    });
                    token = response.body.token;
                    expires = response.body.expires;
                    console.log({
                        token,
                        expires
                    })
                })
        });

        it('AT_07.04.03 | Login to demoQA', () => {
            cy.setCookie('userName', dataFixtures.userName);
            cy.setCookie('token', token);
            cy.setCookie('expires', expires)
            cy.visit('https://demoqa.com/books')

        })
    })

})