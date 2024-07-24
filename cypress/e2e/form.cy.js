describe('Cypress With Forms', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })
  it('Step 1: Get Form', () => {
    cy.contains(/Testing Forms/i)
    // Step 2 Type to Form
    cy.getDataTest('subscribe-form').find('input').type('isacte@gmail.com')
    // Step 3) Subscribe Min.1:15:14
    cy.getDataTest('susbcribe-button').click()
  });
})