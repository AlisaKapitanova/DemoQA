class LinksPage {
    getCreated = () => cy.get("#created")
    getNoContent = () => cy.get("#no-content")
    getMoved = () => cy.get("#moved")
    getBadRequest = () => cy.get("#bad-request")
    getUnauthorized = () => cy.get("#unauthorized")
    getForbidden = () => cy.get("#forbidden")
    getNotFound = () => cy.get("#invalid-url")

    checkNoContent() {
        this.getNoContent().click()
        cy.request('https://demoqa.com/no-content')
        .its("status")
        .should('eq', 204);
        return this 
    }

    checkMoved(){
        this.getMoved().click()
        cy.request('https://demoqa.com/moved')
        .its("status")
        .should('eq', 301);
        return this 
    }
    
    checkBadRequest(){
        this.getBadRequest().click()
        cy.request({url: 'https://demoqa.com/bad-request', failOnStatusCode: false})
        .its("status")
        .should('eq', 400);
        return this 
    }

    checkUnauthorized(){
        this.getUnauthorized().click()
        cy.request({url: 'https://demoqa.com/unauthorized', failOnStatusCode: false})
        .its("status")
        .should('eq', 401);
        return this 
    }

    checkForbidden(){
        this.getForbidden().click()
        cy.request({url: 'https://demoqa.com/forbidden', failOnStatusCode: false})
        .its("status")
        .should('eq', 403);
        return this 
    }

    checkNotFound(){
        this.getNotFound().click()
        cy.request({url: 'https://demoqa.com/invalid-url', failOnStatusCode: false})
        .its("status")
        .should('eq', 404);
        return this 
    }

    checkCreated() {
    this.getCreated().click()
    return this 
}

    
}

export default LinksPage;