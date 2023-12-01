
class ProfilePage {
    getDeleteAllBooksBtn = () => cy.get('#submit:nth-child(1)');

    clickDeleteAllBtn() {
        this.getDeleteAllBooksBtn().should('be.visible').click()
        return this
    }

}

export default ProfilePage;