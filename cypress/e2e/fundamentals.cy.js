describe('Course of Cypress Page Fundamentals', () => {

  beforeEach(() => {
    cy.visit('/fundamentals');
  })

  it('Fundamentals 1: Describe blocks ', () => {
    cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  });

  it('Fundamentals 2: it blocks', () => {
    cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  });
  
  it('Fundamentals 3: comandas & interacting with elements', () => {
    // cy.visit("/")
    cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  });
  it('Fundamentals 4: Getting elements', () => {
    //  it form the page of  fundamentals
    cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  });
  it('Fundamentals 5: Comand chainning & assertions', () => {
    //  it form the page of  fundamentals
    cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  });
  // it.only('Fundamentals 6: Focus on a single test', () => {
  //   cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  // });

  // it('Fundamentals 7: beforeEach', () => {
  //   // cy.visit('/fundamentals');
  //   // change of beforeEach
  //   // cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  // });

  it('Fundamentals 8: beforeEach', () => {
    //  this comand it from commands.js
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamentals')
  })
  it('should contain correct text visibility', () => {
    cy.contains(/Your tests will exist in a describe block/).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/).should('not.be.visible')
  });
})