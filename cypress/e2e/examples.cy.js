describe('Some Example Tests', () =>{
    beforeEach(()=> {
        cy.visit('/examples');
    })
    it('Will test multipage tests', ()=>{


        cy.getDataTest('nav-why-cypress').click();
        cy.location("pathname").should("equal", "/");

        cy.getDataTest('nav-overview').click();
        cy.location("pathname").should("equal", "/overview");

        cy.getDataTest('nav-fundamentals').click();
        cy.location("pathname").should("equal", "/fundamentals");

        cy.getDataTest('nav-forms').click();
        cy.location("pathname").should("equal", "/forms");

        cy.getDataTest('nav-component').click();
        cy.location("pathname").should("equal", "/component");

        cy.getDataTest('nav-best-practices').click();
        cy.location("pathname").should("equal", "/best-practices");

     })

     it.only('Will Test intercepts', () => {
        cy.getDataTest('post-button').click();
        cy.intercept("POST", 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
     })
})