
class ProfilePage {
    getDeleteAllBooksBtn = () => cy.get('div.do button#submit');

    clickDeleteAllBtn() {
        this.getDeleteAllBooksBtn().click()
        return this
    }

}

export default ProfilePage;