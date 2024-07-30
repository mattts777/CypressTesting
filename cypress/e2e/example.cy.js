describe('Cypress mor examples', () => {
  beforeEach(() => {
    cy.visit('/examples')
  })
  it('should conatins', () => {
    cy.contains(/Examples/i)
  });
})