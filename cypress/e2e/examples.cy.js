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

     it('Will Test intercepts', () => {
        cy.getDataTest('post-button').click();
        cy.intercept("POST", 'http://localhost:3000/examples', {
            fixture: 'example.json'
        })
     })

     it.only('Will test grudges', () => {
        cy.contains(/add some grudges/i);
        cy.getDataTest('grudge-clear-button').should('not.exist');
        cy.getDataTest('grudge-list').within( () => {
            cy.get('li').should('have.length', 0);
        })
        cy.getDataTest('grudge-title').should('have.text', 'Add Some Grudges')
        cy.getDataTest('grudge-input').within( () => {
            cy.get('input').type('No EV updates');
        })
        cy.contains(/No EV updates/i).should('not.exist');
        cy.getDataTest('grudge-button').click();
        cy.contains(/No EV updates/i).should('exist');
        cy.getDataTest('grudge-list').within( () => {
            cy.get('li').should('have.length', 1);
        })
        cy.getDataTest('grudge-title').should('have.text', 'Grudges');

        cy.getDataTest('grudge-input').within( () => {
            cy.get('input').type('Missing Chores');
        })
        cy.getDataTest('grudge-button').click();
        cy.getDataTest('grudge-list').within(()=> {
            cy.get('li').should('have.length', 2);
            cy.get('li').its(0).should('contain.text', 'No EV updates');
        })

        cy.getDataTest('grudge-list').within( () => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click();
            })
        })

        cy.getDataTest('grudge-list').within( () => {
            cy.get('li').should('have.length', 1);
        })

        cy.getDataTest('grudge-clear-button').click();
        cy.getDataTest('grudge-list').within( () => {
            cy.get('li').should('have.length', 0);
        })

     })
})