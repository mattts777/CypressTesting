describe('Fundamentals test', () => {
  it('Contanins correct header text', () => {
    cy.visit('/fundamentals');
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
  })
  it('should contains text of accordion', () => {
    cy.visit('/fundamentals');
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-itmens-1"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    // cy.get('[data-test="accordion-itmens-1"] div[role="button]').click()
    // cy.contains(/Your tests will exist in a describe block./i).should('not.be.visible')
  });
})