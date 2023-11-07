describe('', () => {
    it('Tools QA returns to mainPage', () => {
        cy.get("header a").should("have.attr", 'href', 'https://demoqa.com');
    });

    it("Check Box", () => {
        cy.get('.card').eq(0).click()
        cy.get('#item-1').contains('Check Box').click()
        cy.get('.rct-checkbox').click()
        cy.get('#result').should('have.text', 'You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    });

    it("Elements lenght", () => {
        cy.get('.card-body').should ('have.length',6).should('be.visible')
    });

    it("Menu title", () => {
        
        let title = ["Elements", "Forms", "Alerts, Frame & Windows", "Widgets", "Interactions", "Book Store Application"]

        cy.get(".card").each((el, ind) => {
            cy.wrap(el).should('have.text', title[ind])
        })
    })
    it.skip('Check the redirection from home page', () => {
    cy.get('.home-banner').invoke('removeAttr', 'target').click()
   
}) 

     it("Elements - Buttons - Click", () => {
       cy.get("div.card").contains("Elements").click();
       cy.get("#item-4").click();
       cy.get(
         "div.col-12.mt-4.col-md-6 div:nth-child(2) div:nth-child(3) button"
       ).click();
       cy.get("p#dynamicClickMessage")
         .should("be.visible")
         .and("have.text", "You have done a dynamic click");
     });

     it('Check redirection from home page', () => {
        cy.request('https://www.toolsqa.com/selenium-training/')
          .its("status")
          .should('eq', 200);
    }); 
    
     it('Confirm Pop-up window: click on OK', () => {
        cy.get('div:nth-child(3) div:nth-child(1) div:nth-child(3) h5:nth-child(1)').click();
        cy.get('div[class="element-list collapse show"] li[id="item-1"] span[class="text"]').click();
        cy.get('#confirmButton').click();
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Do you confirm action?');
        })
        cy.get('#confirmResult').should('contain', 'Ok').and('contain', 'You selected');
     })

     it('Click one menu element', () => {

        cy.get('div.card:first-child').click();
        cy.url().should('equal', 'https://demoqa.com/elements');       
        cy.get('div.main-header')
          .then(($el) => {
            let textEl = $el.text()
            expect(textEl).to.equal('Elements')            
          });
      });
});
