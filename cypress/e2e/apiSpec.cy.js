/// <reference types="cypress"/>
const API_BASE_URL = Cypress.env('apiBaseUrl')
let dataFixtures;
let CREATED_ID;
let token;

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

    describe('Autorization', () => {
        const getResponce = () =>
            cy.request({
            method: 'POST',
            url: `${API_BASE_URL}/Account/AccountV1/Authorized`,
            headers: {},
            body: {
                userName: dataFixtures.userName,
                password: dataFixtures.password
            }
        });

        it('TC_07.04.01 | Autorization', () => {
            getResponce()
                .then((response) => {
                    expect(response.status).to.be.eql(200);
                console.log({response});
            })
        });
    });

    describe('Autorization', () => {
        const getResponce = () =>
            cy.request({
            method: 'POST',
            url: `${API_BASE_URL}/Account/AccountV1/GenerateToken`,
            headers: {},
            body: {
                userName: dataFixtures.userName,
                password: dataFixtures.password
            }
        });

        it('TC_07.04.02 | Generate Token', () => {
            getResponce()
                .then((response) => {
                    expect(response.status).to.be.eql(200);
                console.log({response});
                token = response.body.token
                console.log(token)
            })
        });
    }) 

})