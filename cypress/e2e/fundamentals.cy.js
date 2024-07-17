describe('Course of Cypress', () => {

  beforeEach(() => {
    cy.visit('/fundamentals');
  })
  it('contains correct header text', () => {
    cy.get('[data-test="fundamentals-header"] ').should('contain.text', 'Testing Fundamentals')
  })
  it('shoud contains correct ', () => {
    cy.contains(/Your tests will exist in a describe block/).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"').click()
    cy.contains(/Your tests will exist in a describe block/).should('be.visible')
    cy.get('[data-test="accordion-item-1"').click()
  });
})