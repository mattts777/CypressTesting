describe('Cypress With Forms', () => {
  beforeEach(() => {
    cy.visit('/forms')
  })
  it('Step 1) should Get form', () => {
    cy.contains(/Testing Form/i)
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
  });
  it('Step 2) should type form', () => {
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('isacte@gmail.com')
  });
  it('Step 3)should Susbcribe', () => {
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('isacte@gmail.com')
    cy.getDataTest('susbcribe-button').click()
  });
  it('Step 4) Test should success email', () => {
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('isacte@gmail.com')
    cy.contains(/Successfully subbed: isacte@gmail.com!/i).should('not.exist')
    cy.getDataTest('susbcribe-button').click()
    cy.contains(/Successfully subbed: isacte@gmail.com!/i).should('exist')
    cy.wait(3000)
    cy.contains(/Successfully subbed: isacte@gmail.com!/i).should('not.exist')
  });
  it('Step 4) Test should fail email', () => {
    // Invalid email:
    cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
    cy.get('@subscribe-input').type('isacte@gmail.mx')
    cy.contains(/Invalid email: isacte@gmail.mx/i).should('not.exist')
    cy.getDataTest('susbcribe-button').click()
    cy.contains(/Invalid email: isacte@gmail.mx/i).should('exist')
    cy.wait(3000)
    cy.contains(/Invalid email: isacte@gmail.mx/i).should('not.exist')
  });
  it('Step 5) should fail', () => {
    cy.contains(/fail!/i).should('not.exist')
    cy.getDataTest('susbcribe-button').click()
    cy.contains(/fail!/i).should('exist')
  });
})