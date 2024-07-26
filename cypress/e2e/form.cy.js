describe('Cypress With Forms', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })
  it('Step 1: Get Form', () => {
    cy.contains(/Testing Forms/i)
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    // Step 2 Type to Form
    cy.get('@subscribe-input').type('isacte@gmail.com')
    cy.contains(/Successfully subbed: isacte@gmail.com!/i).should('not.exist')
    // Step 3) Subscribe Min.1:25
    cy.getDataTest('susbcribe-button').click()
    // Step 4) Test success/fail
    cy.contains(/Successfully subbed: isacte@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: isacte@gmail.com!/i).should('not.exist')
    
    // Invalid email:
    cy.get('@subscribe-input').type('isacte@gmail.mx')
    cy.getDataTest('susbcribe-button').click()
    cy.contains(/Invalid email: isacte@gmail.mx/i).should('exist')

  });
})