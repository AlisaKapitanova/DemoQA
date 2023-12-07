// <reference types="cypress"/>
const API_BASE_URL = Cypress.env('apiBaseUrl')
let dataFixtures;
let CREATED_ID;
let TOKEN_AUTH;

describe.skip('04bookStoreAPI', () => {


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
            })

        it('AT_07.04.04', () => {
            getResponse()
            .its('status')
            .should('be.eq', 200)
        })

        it('Verify response contains property', () => {
            getResponse()
            .then(response => {
                console.log(response)
                expect(response).to.have.property('headers')
            })
        })
    })


})