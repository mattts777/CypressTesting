describe('fundamentals test', () => {
  beforeEach( () => {
    cy.visit('/fundamentals')
  }
  )
  
  it('contains correct header', () => {
    cy.get('[data-test="fundamentals-header"]').contains(/testing fundamentals/i)
  })
  it('Accordian works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordian-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')

  })
})