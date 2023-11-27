// <reference types="cypress"/>

describe('API', () => {

    describe('GET DemoQA', () => {

        const getResponse = () =>
            cy.request({
                method: "GET",
                url: 'https://demoqa.com/'
            })

        it('Verify response status', () => {
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