describe('template spec', () => {
  it('Contains Correct header text', () => {
    cy.visit('/fundamentals')
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
  it('Accordian works correctly', () => {
    cy.visit('/fundamentals')
    cy.contains('Your tests will exist in a describe block.').should('not.be.visible')
    cy.get('[data-test="accordion-item-1"]').click()
    cy.contains('Your tests will exist in a describe block.').should('be.visible')
  })
})